const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

module.exports.run = async (bot, message, args) => {
    if(message.author.id !== "549203468414615562") if(message.author.id !== "578552743539638292") return message.channel.send(":no_entry_sign: Yapımcım Değilsin Bu Komutu kullanamazsın.!")
}
    

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {

    let embed = new Discord.RichEmbed()
    .setTitle('Kullanıcı Sayısı')
    .setDescription(client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString())
    .setColor("RANDOM")
    message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ks','kullanıcısunucu'],
  permLevel: 0
};

exports.help = {
  name: 'ks',
  description: 'Kullanıcı ve sunucu sayısını gösterir',
  usage: 'ks'
};