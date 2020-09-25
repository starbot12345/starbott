const Discord = require("discord.js"); 
module.exports.run = async (bot, message, args) => {    
  let replies = ["https://i1.wp.com/www.nkfu.com/wp-content/uploads/2014/01/ataturk-1.gif?resize=354%2C944&ssl=1, https://media.giphy.com/media/lbOK3uj00mqLC/giphy.gif", "https://media.giphy.com/media/11KZ5xbbnE0EuY/giphy.gif", "https://media.giphy.com/media/etd93UKSpRAIw/giphy.gif", "https://media.giphy.com/media/1232gDBb8YxzXO/giphy.gif"];    
  let result = Math.floor((Math.random() * replies.length));  
  let gifembed = new Discord.RichEmbed()    
  .setTitle("Gifiniz ❤")     
  .setColor("#FF69B4")      
  .setFooter(`Gifiniz Elinizde!`, message.author.avatarURL)  
  .setImage(replies[result]);  
  message.channel.send(gifembed); }; 
exports.conf = { 
  enabled: true, 
 guildOnly: false, 
 aliases: ['atatürk-gif','agif'],  
  permLevel: 0 };
exports.help = {  
  name: 'ataturkgif', 
  description: 'Rastgele atatürk gifi atar.', 
  usage: 'agif' }; 