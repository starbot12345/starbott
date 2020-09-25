const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  
  const tada = (client.emojis.get("611205433998311445"))

    let embed = new Discord.RichEmbed()
    .setColor("0c2094")
    .addField(`Oy Vermek İçin ->`,"[Buraya Tıkla](https://top.gg/bot/597503792585637888/vote)")
    .addField(`Botu Sunucuna Eklemek İçin ->`,"[Buraya Tıkla](https://discord.com/oauth2/authorize?client_id=597503792585637888&scope=bot&permissions=8)")
    message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['oy'],
  permLevel: 0
};

exports.help = {
  name: 'oy',
  description: 'oy vermek için link atar',
  usage: 'oy'
};