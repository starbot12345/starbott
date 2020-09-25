const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

module.exports.run = async (bot, message, args) => {
    if(message.author.id !== "549203468414615562") if(message.author.id !== "578552743539638292") return message.channel.send(":no_entry_sign: Yapımcım Değilsin Bu Komutu kullanamazsın.!")
}
    

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {

    let embed = new Discord.RichEmbed()
    .setTitle('Sunucu Sayısı')
    .setDescription(client.guilds.size)
    .setColor("RANDOM")
    message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ss','sunucusayısı'],
  permLevel: 0
};

exports.help = {
  name: 'ss',
  description: 'Sunucu sayısını gösterir',
  usage: 'ss'
};