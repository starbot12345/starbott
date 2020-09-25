const Discord = require("discord.js");
const os = require('os');
let cpuStat = require("cpu-stat");
const moment = require("moment");
require("moment-duration-format");

exports.run = async (bot, message, args) => {
    var osType = await os.type();
    var osBit = await os.arch();

  let cpuLol;
  cpuStat.usagePercent(function async(err, percent, seconds) {
    if (err) {
        return console.log(err);
    }

		if (osType === 'Darwin') osType = 'macOS'
		else if (osType === 'Windows') osType = 'Windows'
		else osType = os.type();
  
    //--------------------------//
  
  
    if (osBit === 'x64') osBit = '64 Bit'
    else if (osBit === 'x82') osBit = '32 Bit'
    else osBit = os.arch();
    
let user = bot.users.get('549203468414615562')

   const zaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.RichEmbed() 
  .setColor('RED')
  .setFooter('STAR BOT', bot.user.avatarURL)
  .setAuthor('Bot Sahibi', user.avatarURL)
  .setDescription('<@549203468414615562> | Nitrolu Memo Dayı©#9999')
  .addField("• Bellek kullanımı", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField("• Çalışma süresi", zaman)
  .addField("• Kullanıcılar", bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("• Sunucular", bot.guilds.size.toLocaleString(), true)
  .addField("• Kanallar", bot.channels.size.toLocaleString(), true)
  .addField('• İşletim sistemi', `\`${osType} ${osBit}\``, true)
  .addField('• İşlemci', `\`${os.cpus().map(i => `${i.model}`)[0]}\``)
  .addField("• CPU Kullanımı", `\`%${percent.toFixed(2)}\``)
  .addField("• Discord.JS sürüm", "v"+Discord.version, true)
  .addField("• Node.JS sürüm", `${process.version}`, true)
   .addField("• Komut Sayısı", bot.commands.size.toLocaleString(), true)
  .addField("• Ping", bot.ping+" ms", true)
  return message.channel.send(istatistikler);

  })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['i'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Botun istatistiklerini gösterir",
  usage: "istatistik"
};