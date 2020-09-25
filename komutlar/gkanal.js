const Discord = require('discord.js')
const fs = require('fs');
const ayarlar = require('../ayarlar.json');
let kanal = JSON.parse(fs.readFileSync("./jsonlar/gc.json", "utf8"));
var prefix = ayarlar.prefix
 
exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu Komutu Kullanabilmek İçin **Yönetici** İznine Sahip Olmalısın!`);
 
  let channel = message.mentions.channels.first()
    if (!channel) {
        message.channel.send(`:x: | Kullanım: **${ayarlar.prefix}giriş-çıkış-ayarla #kanal**`)
        return
    }
    if(!kanal[message.guild.id]){
        kanal[message.guild.id] = {
   resim: channel.id
        };
    }
    fs.writeFile("./jsonlar/gc.json", JSON.stringify(kanal), (err) => {
        console.log(err)
    })
    message.channel.send(`<a:tik:713487889467441162> | ** Resimli Hoşgeldin - Güle Güle kanalı ${channel} Olarak Ayarlandı.** `)
}
   
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["gkanal-ayarla",'gkanalayarla'],
    permLevel: 0
}
 
exports.help = {
    name: 'giriş-çıkış-ayarla',
    description: 'Giriş Çıkış Kanalını Ayarlar.',
    usage: 'gç-ayarla <#kanal>'
}