const Discord = require('discord.js');

exports.run = (client, message) => {
      const random = Math.floor(Math.random() * 100) + 1
      message.reply(`Efkarınız %${random}`)
   } 
 
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['efkarölçer'],
 permLevel: 0
}

exports.help = {
 name: 'efkarÖLÇER',
 description: 'EfkarÄ±nÄ±zÄ± Ã–lÃ§er ',
 usage: 'efkarÃ¶lÃ§er'
};