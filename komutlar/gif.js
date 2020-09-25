const Discord = require('discord.js');

exports.run = (client, message, args) => {
    
    const Embed = new Discord.RichedEmbed()
        .setImage('https://cdn.discordapp.com/attachments/569234063869739021/608770926762393635/giphy.gif')
    message.channel.send(Embed)
    
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['gif'],
  permLevel: '0' 
};

exports.help = {
  name: 'gif',
  category: 'kullanıcı',
  description: 'Botla alakalı bir gif atar',
  usage: 'gif'
};