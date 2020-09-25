const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  
   const popcornparrot = (client.emojis.get("648566537774694421"))

    let embed = new Discord.RichEmbed()
    .setColor("0c2094")
    .addField(`${popcornparrot} Yetkili Komutları ${popcornparrot}`, `
sb!ban | Belirttiğiniz kullanıcı sunucudan yasaklanır.
sb!unban | Belittiğiniz kullanıcının yasağını kaldırır.
sb!kick | Belirttiğiniz kullanıcı sunucudan atılır.
sb!takmaad | Belirttiğiniz kullanıcının ismi değiştirilir.
sb!reklamtaraması | Sunucudaki kullanıcıların oynuyorunda ve kullanıcı isminde reklam olup olmadığını tarar.
sb!oylama | Bot Oylama Yapar.
sb!sil | Bot Belirtilen Miktardaki Mesaj Sayısını Siler.
sb!sunucutanıt | Bot Sunucunuzu Destek Sunucusunda Tanıtır.
sb!mute | Belittiğiniz kullanıcı susturulur.
sb!unmute | Belittiğiniz kullanıcının susturmasını kaldırır.
sb!emojiekle | Sunucuya emoji eklersiniz.

`)
    message.channel.send(embed)
  
   console.log("sb!yetkili Komutu " + message.author.username + " Tarafından Kullanıldı.")
        console.log(`Komutunu Kullanan Kullanıcı= ${message.author.tag} | Kullanıcı ID= ${message.author.id} | Kullanılan Komut= ${message.content} | Sunucu= ${message.guild.name}`)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yet'],
  permLevel: 0
};

exports.help = {
  name: 'yet',
  description: 'Yetkili komutlarını gösterir',
  usage: 'yet'
};