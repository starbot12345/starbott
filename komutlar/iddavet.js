const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  let nesne = args[0]
  if (!nesne) return message.channel.send('Ops! Bir botun İDsini girmelisin')
  
  
   const embed = new Discord.RichedEmbed()
    .setAuthor(`BOT Davet Bulma`)
   .setDescription(`[LİNK](https://discordapp.com/oauth2/authorize?client_id=${nesne}&scope=bot&permissions=0)`)
    .setColor(3447003)


    return message.channel.send(embed)
  

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['iddavet'],
  permLevel: 0
};

exports.help = {
  name: 'dblarat',
  description: 'DBLde bot aratırsın',
  usage: 'DBLde aratırsın :D'
};