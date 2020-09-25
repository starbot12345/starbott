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
        
    const a = new RichEmbed()
    .setColor("#bf1818")
    .setDescription(`${x.carpi} **Bu komutu kullanabilmek için benimle aynı sesli kanalda olmalısın.**`)  
  if (!voiceChannel) return message.channel.send(a)

  if (serverQueue && serverQueue.playing) {
    serverQueue.playing = false;
    serverQueue.connection.dispatcher.pause();
        const asjdhsaasjdhaadssad = new RichEmbed()
    .setColor("#bf1818")
    .setDescription(`**Şarkı Durduruldu** :pause_button:`)
      return message.channel.send(asjdhsaasjdhaadssad);
    }
    const b = new RichEmbed()
    .setColor("#bf1818")
    .setDescription(`${x.carpi} **Şuanda herhangi bir şarkı çalmıyor.**`)
    if (!serverQueue) return message.channel.send(b);

};

exports.conf = {
    enabled: true,
    aliases: ['pause', 'stop', 'durdur', 'dur', 'duraklat'],
    permLevel: 0
};

exports.help = {
    name: 'müzikduraklat',
    description: 'Çalan şarkıyı duraklatır.',
    usage: 'müzikduraklat'
};