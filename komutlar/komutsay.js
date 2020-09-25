const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`${message.guild.name} - Komut Sayısı`)
    .setDescription('\nBotumuzda  **' + client.commands.size + '** adet komut bulunmaktadır.')
    .setColor("#ff0000")
    .setThumbnail('https://media.giphy.com/media/S65JIDezUg7WX7YROK/giphy.gif')
    .setTimestamp()
    .setFooter(message.author.username , message.author.avatarURL())

    return message.channel.send({embed});
    
    message.channel.send();
};

exports.conf = {
  enabled: true,
  aliases: ['ksayı','komutsayısı','komuts' , 'komutsay'],
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'komutsay',
  description: 'Bottaki Komut Sayısını Gösterir.',
  usage: 'komutlar'
  };