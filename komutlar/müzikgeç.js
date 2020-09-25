const Discord = require('discord.js');
const { RichEmbed } = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube('AIzaSyBROyuJdLiXg_WNHicW-sQ1KHnj5fbDwds');
const x = require("../emojiler.json")

exports.run = async (client, message, args) => {
    if (!message.guild) return message.channel.send(`${x.carpi} **Bu komut özel mesajlarda kullanılmaz!**`);

    const queue = client.queue;
    
    var searchString = args.slice(0).join(' ');
    var url = args[0] ? args[0].replace(/<(.+)>/g, '$1') : '';
    var serverQueue = queue.get(message.guild.id);

    var voiceChannel = message.member.voiceChannel;
        
    const err0 = new RichEmbed()
      .setColor("RANDOM")
      .setDescription(`${x.carpi} **Bu komutu kullanabilmek için benimle aynı sesli kanalda olmalısın.**`) 
    if (!voiceChannel) return message.channel.send(err0);
    const err05 = new RichEmbed()
    .setColor("RANDOM")
    .setDescription(`${x.carpi} **Şuanda herhangi bir şarkı çalmıyor.**`)
    if (!serverQueue) return message.channel.send(err05);
    const songSkip = new RichEmbed()
    .setColor("RANDOM")
    .setDescription(`<a:atla:754335196689465435> **Şarkı atlandı**`)
    serverQueue.connection.dispatcher.end('');
    message.channel.send(songSkip)

};

exports.conf = {
    enabled: true,
    aliases: ['skip', 'atla', 'geç'],
    permLevel: 0
};

exports.help = {
    name: 'müzikgeç',
    description: 'Sıradaki şarkıya geçer. Sırada şarkı yoksa şarkıyı kapatır.',
    usage: 'müzikgeç'
};
   