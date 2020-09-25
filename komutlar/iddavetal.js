const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
exports.run = async(client, message, args) => {
if(message.author.id !== ayarlar.sahip) return;
let onlycode = args[0]
  if(!onlycode || isNaN(onlycode)) return message.channel.send(`Davet linkini alacağın sunucunun ID'sini gir.`)
  client.guilds.get(onlycode).channels.filter(onlykod => onlykod.type === `text`).random().createInvite({maxAge: 0, maxUses: 0}).then(davet => {
    message.author.send(davet.url);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davetal'],
  permLevel: 5
};

exports.help = {
  name: 'sunucu-davet',
  description: 'ID gir sunucu ID vereyim sahip kardeş',
  usage: 'sunucu-davet',
};