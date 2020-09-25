const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  let nesne = args[0]
  if (!nesne) return message.channel.send('Ops! Bir botun İDsini girmelisin')
  
  
   const embed = new Discord.MessageEmbed()
    .setAuthor(`BOT aratma`)
   .setDescription(`[LİNK](https://discordbots.org/bot/${nesne}) \n [VOTE](https://discordbots.org/bot/${nesne}/vote)`)
      .setFooter(`${message.author.username} Bot arattı.`, message.author.avatarURL)
    .setColor(3447003)


    return message.channel.send(embed)
  

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botara'],
  permLevel: 0
};

exports.help = {
  name: 'dblarat',
  description: 'DBLde bot aratırsın',
  usage: 'DBLde aratırsın :D'
};