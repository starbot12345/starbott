const Discord = require('discord.js');
const { RichEmbed } = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube('AIzaSyBROyuJdLiXg_WNHicW-sQ1KHnj5fbDwds');
const x = require("../emojiler.json")

exports.run = async (client, message, args) => {
  if (!message.guild) return message.channel.send(`${x.carpi} **Bu komut özel mesajlarda kullanılmaz!**`);

  const rainbowtada = (client.emojis.get("611205433998311445"))
  const tick = (client.emojis.get('611540228397596681'))
  
    const queue = client.queue;
    
    var searchString = args.slice(0).join(' ');
    var url = args[0] ? args[0].replace(/<(.+)>/g, '$1') : '';
    var serverQueue = queue.get(message.guild.id);

    var voiceChannel = message.member.voiceChannel;

    const embed = new RichEmbed()
    .setColor("#bf1818")
    .setAuthor(`${x.carpi} Hangi şarkıyı çalacağımı yazmadın bu yüzden bir müzik adı yazmalısın`)
    .setDescription("sb!çal [ad veya link]")
    if (!args[0]) return message.channel.send(embed);
        
    const voiceChannelAdd = new RichEmbed()
    .setColor("#bf1818")
    .setDescription(`${x.carpi} **Bu komutu kullanabilmek için bir sesli kanalda olmalısın.**`)
    if (!voiceChannel) return message.channel.send(voiceChannelAdd);

    var permissions = voiceChannel.permissionsFor(client.user);
    if (!permissions.has('CONNECT')) {
      const warningErr = new RichEmbed()
      .setColor("#bf1818")
      .setDescription(`${x.carpi} **Sesli kanala katılabilmek için gereken iznim yok.**`)
      return message.channel.send(warningErr);
    }
    if (!permissions.has('SPEAK')) {
      const musicErr = new RichEmbed()
      .setColor("#bf1818")
      .setDescription(`${x.carpi} Kanalda konuşma iznim yok veya susturulduğum için şarkı çalamıyorum.`)
      return message.channel.send(musicErr);
    }
      if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      var playlist = await youtube.getPlaylist(url);
      var videos = await playlist.getVideos();
      for (const video of Object.values(videos)) {
        var video2 = await youtube.getVideoByID(video.id);
        await handleVideo(video2, message.message, voiceChannel, true);
      }
      const PlayingListAdd = new RichEmbed()
      .setColor("#bf1818")
      .setDescription(`[${playlist.title}](https://www.youtube.com/watch?v=${playlist.id}) **adlı şarkı kuyruğa eklendi!**`)
      return message.channel.send(PlayingListAdd);
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
      try {
          var videos = await youtube.searchVideos(searchString, 10);
          
          var r = 1
        
          var video = await youtube.getVideoByID(videos[r - 1].id);
        } catch (err) {
          console.error(err);
          const songNope = new RichEmbed()
          .setColor("#bf1818")
          .setDescription(`${x.carpi} **Şarkı bulunamadı**`) 
          return message.channel.send(songNope);
        }
      }
      return handleVideo(video, message, voiceChannel);
    }

    async function handleVideo(video, message, voiceChannel, playlist = false) {
        var serverQueue = queue.get(message.guild.id);
        
        var song = {
          id: video.id,
          title: video.title,
          durationh: video.duration.hours,
          durationm: video.duration.minutes,
          durations: video.duration.seconds,
          url: `https://www.youtube.com/watch?v=${video.id}`,
          thumbnail: `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`,
          requester: message.author.tag,
        };
        if (!serverQueue) {
          var queueConstruct = {
            textChannel: message.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 3,
            playing: true
          };
          queue.set(message.guild.id, queueConstruct);
      
          queueConstruct.songs.push(song);
      
          try {
            var connection = await voiceChannel.join();
            queueConstruct.connection = connection;
            play(message.guild, queueConstruct.songs[0]);
          } catch (error) {
            console.error(`${x.carpi} Ses kanalına giremedim HATA: ${error}`);
            queue.delete(message.guild.id);
            return message.channel.send(`${x.carpi} **Ses kanalına giremedim, Lütfen Çözülemeyen bir durumsa sb!bugreport şeklinde bize iletin. Hata:** ${error}`);
          }
        } else {
          serverQueue.songs.push(song);
          
          if (playlist) return undefined;
      
          const songListBed = new RichEmbed()
          .setColor("#bf1818")
          .setDescription(`[${song.title}](https://www.youtube.com/watch?v=${song.id}) **adlı şarkı kuyruğa eklendi!**`)
          return message.channel.send(songListBed);
        }
        return undefined;
      }
        function play(guild, song) {
        var serverQueue = queue.get(guild.id);
      
        if (!song) {
          serverQueue.voiceChannel.leave();
          voiceChannel.leave();
          queue.delete(guild.id);
          return;
        }
      
        const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
          .on('end', reason => {
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
          })
          .on('error', error => console.error(error));
        dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
        
        let y = ''
        if (song.durationh === 0) {
            y = `${song.durationm || 0}:${song.durations || 0}`
        } else {
            y = `${song.durationh || 0}:${song.durationm || 0}:${song.durations || 0}`
        }

        const playingBed = new RichEmbed()
        .setColor("#bf1818")
        .setAuthor(`<:youtube:754332758284959744> Oynatılıyor:`, song.thumbnail)
        .setDescription(`<a:muzik:754068306553471088> [${song.title}](${song.url})`)
        .addField(`<a:sayi:754333297005559869> Şarkı Süresi:`, `${y}`, true)
        .addField(`<:user:754333512319893515> Şarkıyı Açan Kullanıcı:`, `${song.requester}`, true)
        .setThumbnail(song.thumbnail)
        serverQueue.textChannel.send(playingBed);
      }  
};

exports.conf = {
    enabled: true,
    aliases: ['çal', 'play', 'oynat'],
    permLevel: 0
};

exports.help = {
    name: 'müzikoynat',
    description: 'Belirttiğiniz şarkıyı bulunduğunuz sesli kanalda çalar/oynatır.',
    usage: 'müzikoynat [şarkı adı veya link]'
};