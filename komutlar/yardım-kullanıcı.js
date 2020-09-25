const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {

    let embed = new Discord.RichEmbed()
    .setColor("0c2094")
    .addField(`Kullanıcı Komutları`, `
**sb!ascii** Bot Yazınızı Ascii Art Şeklinde Yazar.
**sb!ataçerçeve**
**sb!atatürkgif** Bot Bir Atatürk Gifi Gönderir.
**sb!avatar** Bot İstediğiniz Kişinin Avatarını Gösterir.
**sb!ping** Bot Pingini Gösterir.
**sb!saat** Bot Türkeyenin Saatini Gösterir.
**sb!sunucubilgi** Bot Sunucunun Bilgilerini Verir.
`)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcıkomutları', 'kullanici', 'kullanıcı'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Kullanıcı komutlarını gösterir',
  usage: 'kullanıcı'
};