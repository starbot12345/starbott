const Discord = require('discord.js');

 exports.run = (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmalısın.`);
   message.delete();

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.sendEmbed(

     new Discord.RichEmbed()

     .addField(`:boom: Neyi oylicağını yazman gerek :x:`)).then(m => m.delete(10000));

     message.channel.sendEmbed(

       new Discord.RichEmbed()

       .setColor("RANDOM")
       .setThumbnail(client.user.avatarURL)
       .setTimestamp()

       .addField(`**Oylama**`, `**${question}**`)).then(function(message) {

         message.react(`<a:tick:611540228397596681>`);

         message.react(`<a:cross~1:611540327248953364>`);

       });

     };

     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['oylama'],
       permLevel: 0
};

exports.help = {
  name: 'oylama',
  description: 'Oylama yapmanızı sağlar.',
  usage: 'oylama <oylamaismi>'
};