const Discord = require('discord.js');
const fs = require('fs');
let küfürEngel = JSON.parse(fs.readFileSync("././jsonlar/capslockEngelle.json", "utf8"));

var ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);

    let args = message.content.split(' ').slice(1);
    const secenekler = args.slice(0).join(' ');

    var errembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`Yanlış Kullanım!`)
    .addField(`Doğru Kullanım:`, `${ayarlar.prefix}capslockengel aç veya kapat`)
    if(secenekler.length < 1) return message.channel.send(errembed);
    //if(secenekler === "aç" || "kapat") return message.channel.send(errembed);
      if(secenekler.length < 1) return message.reply("CapsLock Engelleme Açmak İçin `sb!capslockengel aç` kapatmak için `sb!capslockengel kapat`").then(m => m.delete(10000));

    message.delete();

            if (secenekler === "aç") {
        message.channel.send(`CapsLock Engelleme Sistemi: **açık**!`).then(m => m.delete(5000));
        küfürEngel[message.guild.id] = {
            küfürEngel: "acik"
          };

          fs.writeFile("././jsonlar/capslockEngelle.json", JSON.stringify(küfürEngel), (err) => {
            if (err) console.log(err)
          });
    };

    if (secenekler === "kapat") {
        message.channel.send(`CapsLock Engelleme Sistemi: **kapalı**!`).then(m => m.delete(5000));
        küfürEngel[message.guild.id] = {
            küfürEngel: "kapali"
          };

        fs.writeFile("././jsonlar/capslockEngelle.json", JSON.stringify(küfürEngel), (err) => {
            if (err) console.log(err)
          });
    };
}

    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['capslock-engel','caps-lock-engelle','capslockengeli','capslockengel'],
        permLevel: 3,
kategori : 'ayarlar'
      };
      
      exports.help = {
        name: 'capslock-engelle',
        description: 'Küfür engelleme sistemini açıp kapatmanızı sağlar.',
        usage: 'capslock-engelle <aç> veya <kapat>'
      };