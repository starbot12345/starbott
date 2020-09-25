const Discord = require('discord.js');
const db = require("quick.db");
exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
  if (!mesaj) return message.reply('Bir not yazmalısın ki bende onu kaydediyim!')
  db.set(`nots_${message.author.id}`, mesaj)
  const embed = new Discord.RichEmbed()
  .setDescription('Notun **'+ mesaj +'** olarak ayarlandı!')
   .setColor(0x36393E)
  message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'notal',
  description: 'Özel komut.',
  usage: ''
};