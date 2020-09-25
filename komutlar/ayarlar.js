const Discord = require('discord.js');
var ayarlar = require('../ayarlar.json');
const fs = require('fs');
let girisCikis = JSON.parse(fs.readFileSync("././jsonlar/gc.json", "utf8")); //Bu dosyaları oluşturun
let küfürEngel = JSON.parse(fs.readFileSync("././jsonlar/kufurEngelle.json", "utf8")); //Bu dosyaları oluşturun
let linkEngel = JSON.parse(fs.readFileSync("././jsonlar/reklamEngelle.json", "utf8")); //Bu dosyaları oluşturun
let capslockEngel = JSON.parse(fs.readFileSync("././jsonlar/capslockEngelle.json", "utf8")); //Bu dosyaları oluşturun
let girisM = JSON.parse(fs.readFileSync("././jsonlar/girisM.json", "utf8")); //Bu dosyaları oluşturun
let cikisM = JSON.parse(fs.readFileSync("././jsonlar/cikisM.json", "utf8")); //Bu dosyaları oluşturun
let mod = JSON.parse(fs.readFileSync("././jsonlar/mLog.json", "utf8")); //Bu dosyaları oluşturun

exports.run = (client, message) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  var embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(`» ${message.guild.name} Sunucu Ayarları «`, `https://images-ext-2.discordapp.net/external/ujBwHK3NkvSNyffbh50uDXaOIG6M3ED77fYEsn33Sl4/http/cdn.onlinewebfonts.com/svg/download_136247.png`)
  .addField("Giriş Çıkış Kanalı", girisCikis[message.guild.id] ? `<#${girisCikis[message.guild.id].girisCikis}>` : `Ayarlanmamış`, true)
  .addField("Moderasyon Kayıt Kanalı", mod[message.guild.id] ? `<#${mod[message.guild.id].modlog}>` : `Ayarlanmamış`, true)
  .addField("Reklam Engelleme Sistemi", linkEngel[message.guild.id] ? "Açık" : "Kapalı", true)
  .addField("Küfür Engelleme Sistemi", küfürEngel[message.guild.id] ? "Açık" : "Kapalı" ,true)
  .addField("CapsLock Engelleme Sistemi", capslockEngel[message.guild.id] ? "Açık" : "Kapalı" ,true)
  .addField("Giriş Mesajı", girisM[message.guild.id] ? `**Mesaj:** \n\`\`\`${girisM[message.guild.id].girisM}\`\`\`` : `Ayarlanmamış`)
  .addField("Çıkış Mesajı", cikisM[message.guild.id] ? `**Mesaj:** \n\`\`\`${cikisM[message.guild.id].cikisM}\`\`\`` : `Ayarlanmamış`)
  message.channel.send(embed)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: `Yönetici izni gerekiyor.`
  };
  
  exports.help = {
    name: 'ayarlar',
    category: 'ayarlar',
    description: 'Sunucu ayarlarını gösterir.',
    usage: 'g!ayarlar'
  };