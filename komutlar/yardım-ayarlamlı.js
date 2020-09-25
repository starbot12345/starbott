const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {

    let embed = new Discord.RichEmbed()
    .setColor("0c2094")
    .addField(`Kullanıcı Komutları`, `
sb!küfürengel (aç veya kapat)
sb!reklamengel (aç veya kapat)
sb!resimligüvenlik (aç veya kapat)
sb!saas (aç veya kapat)
sb!rolkoruma (aç veya kapat)

`)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ayarlamalıkomutlar', 'ayarlamalı', 'ayarlamali'],
  permLevel: 0
};

exports.help = {
  name: 'ayarlamalı',
  description: 'Kullanıcı komutlarını gösterir',
  usage: 'ayarlamalı'
};