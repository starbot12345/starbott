const Discord = require('discord.js');
const db = require('quick.db')
const x = require("../emojiler.json")

exports.run = async (bot, message,args) => {
  
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`${x.carpi} Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`guvenlik${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!logkanal) return message.channel.send(`${x.carpi} Güvenliği kapatmak için \`güvenlik kanalının\` seçili olması lazım örnek kullanım: \`sb!güvenlik #kanal\``);
    
   db.delete(`guvenlik${message.guild.id}`)
   message.channel.send(`${x.tik} Güvenlik başarıyla kapatıldı.`);
  
    return
  }
  
if (!logk) return message.channel.send(`${x.carpi} Güvenlik kanalını bulamadım  Kullanım \`sb!güvenlik #kanal\` `);
 

   db.set(`guvenlik${message.guild.id}`, logk.id)

message.channel.send(`${x.tik} Güvenlik başarıyla ${logk} olarak ayarlandı`);

}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gks','güvenlik'],
  permLevel: 4
};

module.exports.help = {
  name: 'güvenlik',
  description: 'Bratva STARK',
  usage: 'STARKtan hediye :)'
};