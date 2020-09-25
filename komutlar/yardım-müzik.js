const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  
  const tada = (client.emojis.get("611205433998311445"))

    let embed = new Discord.RichEmbed()
    .setColor("0c2094")
    .addField(`<a:muzik:754068306553471088> Müzik Komutları <a:muzik:754068306553471088>`, `
**sb!ayrıl** | Bot Sesli Odadan Ayrılır.
**sb!devamet** | Bot Müziği Devam Ettirir.
**sb!duraklat** | Bot Müziği Duraklatır.
**sb!geç** | Bot Çalan Müziği Geçer.
**sb!katıl** | Bot Sesli Odaya Katılır.
**sb!oynat** | Bot Müzik Açar.
**sb!tekrar** | Bot Müziği Tekrar Oynatır.
`)
    message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['muzik', 'müzikkomutları','müzik'],
  permLevel: 0
};

exports.help = {
  name: 'müzik',
  description: 'Müzik komutlarını gösterir',
  usage: 'müzik'
};