const Discord = require('discord.js');
const { RichEmbed } = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube('AIzaSyBROyuJdLiXg_WNHicW-sQ1KHnj5fbDwds');
const x = ("../emojiler.json")

exports.run = async (client, message, args) => {
  if (!message.guild) return message.channel.send(`${x.carpi} **Bu komut özel mesajlarda kullanılmaz!**`);

    const queue = client.queue;
    
    var searchString = args.slice(0).join(' ');
    var url = args[0] ? args[0].replace(/<(.+)>/g, '$1') : '';
    var serverQueue = queue.get(message.guild.id);

    var voiceChannel = message.member.voiceChannel;
 
    const an = new RichEmbed()
    .setColor("#bf1818")
    .setDescription(`${x.carpi} **Bu komutu kullanabilmek için benimle aynı sesli kanalda olmalısın.**`)  
  if (!voiceChannel) return message.channel.send(an)

  const p = new RichEmbed()
  .setColor("#bf1818")
  .setDescription(`${x.carpi} Şuanda herhangi bir şarkı çalmıyor.`)
  if (!serverQueue) return message.channel.send(p);
      
  var u = serverQueue.songs[0]
      
  /*var pla = await youtube.getPlaylist(u);
    var v = await pla.getVideos();*/
    var vi2 = await youtube.getVideoByID(u.id);
    await handleVideo(vi2, message, voiceChannel, true);
  const PlayingListAdd = new RichEmbed()
  .setColor("#bf1818")
  .setDescription(`${x.tik} [${u.title}](https://www.youtube.com/watch?v=${u.id}) adlı şarkı bitince tekrar oynatılacak!`)
  return message.channel.send(PlayingListAdd);

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
        return message.channel.send(`${x.carpi} Ses kanalına giremedim, Lütfen Çözülemeyen bir durumsa e!bugreport şeklinde bize iletin. HATA: ${error}`);
      }
    } else {
      serverQueue.songs.push(song);
      
      if (playlist) return undefined;
  
      const songListBed = new RichEmbed()
      .setColor("#bf1818")
      .setDescription(`${x.tik} [${song.title}](https://www.youtube.com/watch?v=${song.id}) **adlı şarkı kuyruğa eklendi!**`)
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
    aliases: ['yeniden', 'tekrar'],
    permLevel: 0
};

exports.help = {
    name: 'müziktekrar',
    description: 'Çalan şarkı bitince aynı şarkıyı otomatik olarak tekrar oynatır.',
    usage: 'müziktekrar'
};
   