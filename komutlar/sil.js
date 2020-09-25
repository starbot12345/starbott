const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
if(!args[0]) return message.channel.send(" **Lütfen Silinicek Mesaj Miktarını Yazın.!** ");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`<a:tick:611540228397596681> ${args[0]} Adet Mesajı Sildim. <a:tick:611540228397596681>`).then(msg => msg.delete(5000));
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'sil',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'sil <silinicek mesaj sayısı>'
};