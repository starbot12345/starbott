const Discord = require('discord.js');

exports.run = function(client, message, args) {
 
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "**Sahip**" yetkisine sahip olmalısın.`);
  let guild = message.guild
  let [link, ad] = args.join(",").split(",");
  if (!link) return message.channel.send(`Bir link yazmalısın.`)
  if (!ad) return message.channel.send(`Bir isim yazmalısın.`)
 
  guild.createEmoji(link, ad)
    .then(emoji => message.channel.send(`**${emoji.name}** adlı, (${emoji.id}) İD'li Emoji Oluşturuldu. ${emoji}`))
    .catch(console.error);
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['emojiekle'],
  permLevel: 0
};

exports.help = {
  name: 'emojiekle',
  description: '',
  usage: 'emojiekle'
};