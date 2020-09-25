const Discord = require('discord.js')
const db = require('quick.db')

exports.run = (client, message, args) => {
  
  if(message.author.id != "549203468414615562") return message.channel.send(":no_entry_sign: **Geliştiricim değilsin bu komutu kullanamazsın!**")
  
  if(!args[0]) return message.channel.send('Bakım modunu açmak için sb!bakım aç ; Bakım modunu kapatmak için sb!bakım kapat')
  
  if(args[0] === 'aç') {
    if(db.fetch(`bakim`)) return message.channel.send('Bakım modu zaten açık')
    message.channel.send('Bakım modu açıldı.')
    db.set(`bakim`, 'acik')
  }
  if(args[0] === 'kapat'){
    if(!db.fetch(`bakim`)) return message.channel.send('Bakım modu zaten kapalı.')
    message.channel.send('Bakım modu kapatıldı.')
    db.delete(`bakim`)
  }
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['bakım','bakim'],
  permLevel: 0
}

exports.help = {
  name: 'bakım'
}