const Discord = require('discord.js');

exports.run = (client, message) => {
      const random = Math.floor(Math.random() * 100) + 1
      message.reply(`Hayattaki Şansınız %${random}`)
   } 
 
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['şansölçer','şans'],
 permLevel: 0
}

exports.help = {
 name: 'şansölçer',
 description: 'EfkarÄ±nÄ±zÄ± Ã–lÃ§er ',
 usage: 'efkarÃ¶lÃ§er'
};