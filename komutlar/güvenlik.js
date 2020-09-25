const Discord = require('discord.js')
const fs = require('fs');
var ayarlar = require('../ayarlar.json');
exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  const db = require('quick.db');
  let channel = message.mentions.channels.first()
    if (!channel) {
        return message.channel.send(":x: Komutu eksik yada hatalı kullandınız! Örnek Kullanım; sb!güvenik <#kanal>")
    }
    db.set(`dKanal_${message.guild.id}`, "<#"+channel.id+">")
    message.channel.send(` | Guvenlik takip kanalı ${channel} olarak ayarlandı!`)
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gks','güvenlik'],
  permLevel: 4
};
module.exports.help = {
  name: 'güvenlik-sistem',
  description: 'techno code discord server aittir izinsiz paylaşmayın yeter!',
};
   