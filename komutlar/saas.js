const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

var p = ayarlar.prefix;

exports.run = async (bot, message, args) => {
  
  const tik = (bot.emojis.get("713487889467441162"))

    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Yetkiniz Bulunmamaktadır!');

    if (!args[0]) return message.reply(`Kullanmak İçin : sb!sa-as aç/kapat`);

    if (args[0] == 'aç') {
        var durum = await db.fetch(`saas_${message.guild.id}`)            
        if (durum == "acik") return message.channel.send("Önceden Açılmış Bir Şeyi **Şimdi** __Açamazsın!__");
        db.set(`saas_${message.guild.id}`, 'acik')
        message.channel.send(`__Selam Verme Modu **Açıldı**__ ${tik}`)
    }

    if (args[0] == 'kapat') {
        var durum = await db.fetch(`saas_${message.guild.id}`)            
        if (durum == "kapali") return message.channel.send("Önceden Kapanmış Bir Şeyi **Şimdi** __Kapatamazsın!__");
        db.set(`saas_${message.guild.id}`, 'kapali')
        message.channel.send(`__Selam Verme Modu **Kapatıldı**__ ${tik}`)
    }

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['saas'],
    permLevel: 0
}

exports.help = {
    name: 'sa-as',
    description: 'Botun Sa Yazana Cevap Versin mi Vermesin mi?',
    usage: 'sa-as'
}