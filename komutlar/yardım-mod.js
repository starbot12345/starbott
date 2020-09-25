const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {

    let embed = new Discord.RichEmbed()
    .setColor("0c2094")
    .addField(`<a:ban:754065544210153555> Yetkili Komutları <a:ban:754065544210153555>`, `
**sb!ban** | Belirttiğiniz kullanıcı sunucudan yasaklanır.
**sb!unban** | Belittiğiniz kullanıcının yasağını kaldırır.
**sb!kick** | Belirttiğiniz kullanıcı sunucudan atılır.
**sb!takmaad** | Belirttiğiniz kullanıcının ismi değiştirilir.
**sb!reklamtaraması** | Sunucudaki kullanıcıların oynuyorunda ve kullanıcı isminde reklam olup olmadığını tarar.
**sb!sunucukur** | Sunucunuzu baştan kurar.
**sb!emojiekle** | Sunucuya emoji ekler.
**sb!sil** | Belirttiğiniz kadar mesaj siler (0-100)
**sb!kanalaçıklama** | Komutu kullandığınız kanalın açıklamasını değiştirir.
**sb!mute** | Belirttiğiniz kullanıcıyı susturur.
**sb!oylama** | Bot oylama yapar.
**sb!sunucutanıt** | Sunucunuz botun destek sunucusunda tanıtılır.
**sb!unmute** | Belirttiğiniz kullanıcının susturulmasını kaldırır.
**sb!uyarı** | Belirttiğiniz kullanıcıyı uyarır.
**sb!slowmode** | Kanalın yazma hızını ayarlarsınız.
**sb!sunucupanel** | Bot sunucuya üye durum paneli kurar.

`)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkilikomutları','yetkili'] ,
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'yetkili komutlarını gösterir',
  usage: 'yetkili'
};