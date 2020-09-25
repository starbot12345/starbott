const db = require("quick.db");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
const x = require("../emojiler.json")

exports.run = async (client, message, args) => {

  let prefix = ayarlar.prefix  
 

  if (!args[0]) {
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setTitle("Rol Koruma sistemi!")
      .setDescription(`
${x.carpi} Yetersiz Bilgi. sb!rolkoruma \`aç veya kapat\`
`
      );

    message.channel.send(embed);
    return;
  }
  let rol = await db.fetch(`rolk_${message.guild.id}`);
  if (args[0] == "aç") {
    if (rol) {
      const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setTitle("Rol Koruma Sistemi!")
        .setDescription(`${x.carpi} Rol Koruma Sistemi Zaten Kapalı.`);

      message.channel.send(embed);
      return;
    } else {
      db.set(`rolk_${message.guild.id}`, "acik");
      const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setTitle("Rol Koruma Sistemi!")
        .setDescription(`${x.tik} Rol Koruma Sistemi Açıldı.`);

      message.channel.send(embed);
    }
  } else if (args[0] == "kapat") {
    db.delete(`rolk_${message.guild.id}`);
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setTitle("Rol Koruma Sistemi!")
      .setDescription(`${x.tik} Rol Koruma Sistemi Kapatıldı.`);

    message.channel.send(embed);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rolkoruma", "rkoruma", "rol", "rol-koruma"],
  permLevel: 2,
  kategori: "sunucu"
};

exports.help = {
  name: "rol-koruma",
  description: "Rol koruma",
  usage: "rol-koruma"
};