const Discord = require('discord.js');
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json")
const embed = new Discord.RichEmbed()


module.exports.run = async (bot, message, args) => {
    if(message.author.id !== "549203468414615562") return message.channel.send(":no_entry_sign: **Geliştiricim değilsin bu komutu kullanamazsın!**")
 

   const loading = (bot.emojis.get("638043303857618955"))
    message.channel.send(`${loading} **Bot yeniden başlatılıyor SAHİP...** ${loading}`).then(msg => {
    console.log(`BOT: Bot yeniden başlatılıyor SAHİP...`);
    process.exit(0);
  })
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["r","reboot","yenile","yeniden başlat"],
  permLevel: 0
};

module.exports.help = {
  name: 'reboot',
  description: 'Sistemi yeniden başlatır',
  usage: 'reboot'
};    