const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
 let mert = args[0] 
 let mertS = await db.fetch(`kod`)
 let mertK = await db.fetch(`kodsure`)
 
 if(!mertS) return message.channel.send(':x: No code found in the system.')
 
 if(!mertK) return message.reply(':x: You must enter a code.')

 if(mertK !== mertS) return message.reply(':warning: You entered an incorrect or used code.') 
  message.channel.send(':tada: Your VIP has been activated for *'+mertK+' miliseconds.*')
  message.client.channels.get("745277047609229373").send(':white_check_mark: <@!'+ message.author.id +'> Congratulations. You Successfully Become a VIP')
  db.delete(`kod`)  
 db.delete(`kodsüre`) 
  //--------------------------------
  db.set(`iron`, 'aktif') // GOLD ÜYE VERİNİZİ BURAYA YAZMAYI UNUTMAYIN YOKSA ÇALIŞMAZ
  //--------------------------------
  
  
  setTimeout(() => {
 message.client.channels.get("745277047609229373").send(':x: <@!'+ message.author.id +'> Your VIP is now over.')  

 
    //--------------------------------
  db.delete(`iron`) // GOLD ÜYE VERİNİZİ BURAYA YAZMAYI UNUTMAYIN YOKSA ÇALIŞMAZ
  //--------------------------------  
 },mertK)
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['kod-kullan'], 
  permLevel: 0
};

exports.help = {
  name: 'kod-kullan',
  description: 'taslak', 
  usage: 'kod-kullan'
};