const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {  
  
let replies = ["https://media.giphy.com/media/RIkfRXlz7anCFxDi1j/giphy.gif"];   
let result = Math.floor((Math.random() * replies.length));  
let gifembed = new Discord.RichEmbed()       
.setTitle("Mısırınız ❤") 
.setColor("#FF69B4")
.setFooter(`Mısırınız Elinizde`, message.author.avatarURL) 
.setImage(replies[result]);
  message.channel.send(gifembed); };


exports.conf = { 
enabled: true, 
guildOnly: false, 
aliases: ['mısır'], 
permLevel: 0 }; 

exports.help = {  
  name: 'mısır', 
  description: 'Rastgele mısır resmi  atar.', 
  usage: 'mısır' 
}; 