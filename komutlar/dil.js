const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
const db = require("quick.db")
exports.run = async (client, message, args) => {
    if(!message.guild) return;

    const dil = db.fetch(`dil_${message.guild.id}`) || "en-EN"
if (dil == "en-EN") {


  if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(` You need \`Manage_Guild\` authorization for this command!`)

    if(!args[0]) return message.channel.send(`You must enter a language! `)


    if(args[0] == "english") return message.channel.send(`Language is already english set!`)
    if(args[0] !== "turkish") return message.channel.send(`The language you entered does not exist!`)


    message.channel.send(` Dil başarıyla **${args[0]}** olarak ayarlandı`)

    db.set(`dil_${message.guild.id}`,`tr-TR`)
}else if(dil == "tr-TR"){

  if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(` Bu komut için \`Sunucuyu_Yönet\` yetkisine ihtiyacın var!`)

    if(!args[0]) return message.channel.send(` Bir dil girmelisin!`)

    if(args[0] == "turkish") return message.channel.send(` Dil zaten **turkish** olarak ayarlı!`)
    if(args[0] !== "english") return message.channel.send(` Girdiğiniz dil bulunmamaktadır!!`)

    

    message.channel.send(` Dil başarıyla **${args[0]}** olarak ayarlandı`)

    db.set(`dil_${message.guild.id}`,`en-EN`)
}};

exports.conf = {
  enabled: true,
  guildOnly: true,
  permLevel: 0,
  aliases: ["dil","lang"]
};

exports.help = {
  name: 'language',
  description: 'Changes the language of the bot',
  usage: 'language <language> ',
  kategori:'sunucu'
};