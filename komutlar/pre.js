const Discord = require('discord.js');
const client = new Discord.Client()
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async (bot, message, args) => {
 var kod = args[0]
if(!kod) return message.channel.send("Bir Kod Yaz")
  if(!db.fetch(`${kod}`)) return message.channel.send("Kodunuz Calismadi Veya Alinmis")
  db.set(`gold_${message.author.id}`,"aktif")
  db.delete(`${kod}`)
  message.channel.send(`${client.emojis.get(client.emojiler.neon)} Basari Ile Gold Sistemine Alindiniz ${client.emojis.get(client.emojiler.neon)}`)
  client.channels.get("709762690523856937").send(`:tada: <@${message.author.id}> isimli kullanıcı sitemizde promosyon kodunu kullanarak **GOLD UYELIK** kazanmıştır!`)
 };
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["prek","prekod"],

  permLevel: 0 
};

exports.help = {
  category: 'kullanıcı',
  name: "promosyonkullan",
  description: '',
  usage: ''
};