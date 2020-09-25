const Discord = require('discord.js');
const db = require('quick.db')
const moment = require('moment')
const generator = require('generate-password');
exports.run = async(client, message, args) => { 
  
if(message.author.id !== "549203468414615562") return message.channel.send(":x: You don't have enough privileges to generate code.")

let mert = args[0]

if(mert < 5) message.reply(":x: I can't generate code in less than 5 seconds.")
if(!mert) return message.reply('You must enter a number.')
if(isNaN(mert)) message.reply(':x: You must enter a number.')
  
  message.channel.send(':mailbox_with_no_mail: |Check your **DM** Box')  
  
         var mertS = generator.generate({
        length: 10,
        numbers: true,  
         })  
  
         
   let mertK = mert * 1000      
         
         
message.author.send('Kod: **'+mertS+'** \n\n Süre: **'+mert+'** Saniye')  
  
 db.set(`kod`, mertS) 
  db.set(`kodsure`, mertK) 
 
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['kodoluştur'], 
  permLevel: 0
};

exports.help = {
  name: 'kodoluştur',
  description: 'kod oluşturur', 
  usage: 'kodoluştur'
};