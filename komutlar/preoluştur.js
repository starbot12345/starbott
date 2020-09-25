const Discord = require("discord.js")
const db = require("quick.db")
const fs = require("fs")
const ayarlar = require("../ayarlar.json")
const generator = require("generate-password");

exports.run = async (client, message, args) => {
   if (message.author.id !== ayarlar.sahip  ) return message.channel.send(`${client.emojis.get(client.emojiler.dikkat)} Sahibim değilsin ${client.emojis.get(client.emojiler.dikkat)}`)
    let üye = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    var asilkod = generator.generate({
        length: 11,
        numbers: true,
    })
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
}
  const randomizer = getRandomInt('1', '150')
  db.set(`${asilkod}-ANAHTAR-KOD-${randomizer}`, 'aktif')
  if (!üye) {
    message.channel.send(`Promosyon kodu gönderildi: ${message.author.tag}`)
    message.author.send(`Merhaba üye ${message.author.tag}. Artık bir promosyon koduna sahipsin. Peki nedir bu promosyon kodu?\n\n- \`Promosyon kodunu kullanarak gold üye kazanabilirsiniz.\`\n\n**Promosyon kodunuzu t!promosyonkullan kısmından kullanabilirsiniz.\n\nPromosyon kodunuz:** \`${asilkod}-ANAHTAR-KOD-${randomizer}\``)
  } else {
    message.channel.send(`Promosyon kodu gönderildi: ${üye.user.tag}`)
    üye.send(`Merhaba üye ${üye.user.tag}. Artık bir promosyon koduna sahipsin. Peki nedir bu promosyon kodu?\n\n- \`Promosyon kodunu kullanarak gold üye kazanabilirsiniz.\`\n\n**Promosyon kodunuzu t!promosyonkullan \`${asilkod}-ANAHTAR-KOD-${randomizer}\` kısmından kullanabilirsiniz.\n\nPromosyon kodunuz:** \`${asilkod}-ANAHTAR-KOD-${randomizer}\``)
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["preoluştur"],
  permLevel: 0
};

exports.help = {
  name: 'promosyon-oluştur',
  description: 'Kod denemek için kullanılır.',
  usage: 'prever'
}