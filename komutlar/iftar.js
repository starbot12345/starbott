const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const moment = require("moment")
var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {
    const superagent = require('superagent')
    if(!args[0]) return message.channel.send(`❌ Bir şehir girmelisin. Örneğin **sb!iftar İstanbul**`)
    let {body} = await superagent 
    .get(`https://namazapi.glitch.me/namaz?sehir=${args[0]}`);
    if(!{body}) return message.channel.send(`404! Bir Hata Oluştu! Lütfen Biraz Sonra Tekrar Dene!`)
    if(body.hata) return message.channel.send(`Lütfen Geçerli Bir Şehir Gir!`)
    let saat = moment().utc().add(3, "hour").format("HH:mm") 
    const embed = new Discord.RichedEmbed()
    .setColor('ff000')
    .setAuthor(`${args[0]} İftar Bilgileri!`, message.author.avatarURL())
    .setThumbnail("https://cdn.discordapp.com/attachments/703327606883483789/703356887768367124/thumbs_b_c_c54dc19678389482e4f526e877b4b8cd.jpg")
    .addField("**Tarih:**",`\`${body.tarih} ${saat}\``)
    .addField(`${args[0]} **İmsak Ezan vakti:**`, `\`${body.İmsak}\``, true)
    .addField(`${args[0]} **Sabah Ezan vakti:**`, `\`${body.Güneş}\``, true)
    .addField(`${args[0]} **Öğle Ezan vakti:**`, `\`${body.Öğle}\``, true)
    .addField(`${args[0]} **İkindi Ezan vakti:**`, `\`${body.İkindi}\``, true)
    .addField(`${args[0]} **Akşam Ezan vakti:**`, `\`${body.Akşam}\``, true)
    .addField(`${args[0]} **Yatsı Ezan vakti:**`, `\`${body.Yatsı}\``, true)
    .setFooter(`API Sahibi: Speed#9743`, message.author.avatarURL())
    .setTimestamp()
    message.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['iftar-vakti'],
  permLevel: 0
};

exports.help = {
  name: 'iftar'
};