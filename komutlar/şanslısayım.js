const Discord = require('discord.js');

exports.run = (client, message) => {
      const random = Math.floor(Math.random() * 100) + 1
      message.reply(`Şanslı Sayınız = **${random}**`)
   } 
 
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['şanslısayım'],
 permLevel: 0
}

exports.help = {
 name: 'şanslısayım',
 description: 'EfkarÄ±nÄ±zÄ± Ã–lÃ§er ',
 usage: 'şanslısayım'
};