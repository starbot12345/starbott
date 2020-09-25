const Discord = require('discord.js');
const fs = require('fs');
let linkEngelle = JSON.parse(fs.readFileSync("./jsonlar/reklamEngelle.json", "utf8"));

exports.run = async (client, message) => {
  
    let args = message.content.split(' ').slice(1);
    const secenekler = args.slice(0).join(' ');

    if(secenekler.length < 1) return message.channel.send("Link Engelleme Açmak İçin `sb!linkengel aç` kapatmak için `sb!linkengel kapat`").then(m => m.delete(10000));

  if (secenekler !== "aç" && secenekler !== "kapat" && secenekler !== "on" && secenekler !== "off") return message.reply("aç veya kapat yaz!")

    if (secenekler === "aç" || secenekler === "on") {
    
    message.delete();
        
      
    
        message.channel.send("Link Engelleme Sistemi: **Açık**!").then(m => m.delete(5000));
    
  if(!linkEngelle[message.guild.id]){
        linkEngelle[message.guild.id] = {
            linkEngelle: "acik"
          };
  };

          fs.writeFile("././jsonlar/reklamEngelle.json", JSON.stringify(linkEngelle), (x) => {
        if (x) console.error(x)
      })
    };

    if (secenekler === "kapat" || secenekler === "off") {
  message.channel.send(`Link Engelleme Sistemi: **kapalı**!`).then(m => m.delete(5000));
    
  if(!linkEngelle[message.guild.id]){
        linkEngelle[message.guild.id] = {
            linkEngelle: "kapat"
          };
  };

        fs.writeFile("././jsonlar/reklamEngelle.json", JSON.stringify(linkEngelle), (x) => {
        if (x) console.error(x)
      })

       delete linkEngelle[message.guild.id]
       delete linkEngelle[message.guild.id].linkEngel

        message.channel.send("İşlem Başarılı: Kapalı!").then(m => m.delete(10000));
    
    };
}

    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['link-engelle', 'reklamkoruması', 'reklam-koruması', 'linkengel'],
        permLevel: 3
      };
      
    exports.help = {
        name: 'link-engelle',
        description: 'Lİnk engelleme sistemini açıp kapatmanızı sağlar.',
        usage: 'link-engelle <aç/kapat>'
    };