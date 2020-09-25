const Discord = require('discord.js');

exports.run = (client, message, args) => {
    
    let user;
    
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    
    const avatar = new Discord.MessageEmbed()
        .setColor("1")
        .setAuthor("» Buyur İstediğin Kişinin Avatarı,")
        .setImage(user.avatarURL)
    message.channel.send(avatar)
    
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["avatar"],
  permLevel: 0 
};

exports.help = {
  name: 'avatar',
  category: 'kullanıcı',
  description: 'Belirtilen Kişinin veya Komutu Yazan Kişinin Avatarını Atar.',
  usage: 'avatar'
};