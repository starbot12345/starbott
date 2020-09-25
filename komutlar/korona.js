const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  if(!args[0]) return message.reply('COVID-19 Güncel İstatistik Tablosu Kullanımı ```Güncel Covid-19 vaka istatistiklerini buradan görebilirsin. Ülkeye özel istatistikler için sb!korona <ülke kodu> komutunu kullanabilirsin. #Evdekal```**Doğru Kullanım:** __sb!korona <ülke kodu>__')

  let a = args[0].toLowerCase()
  .replace('Türkiye', 'TR')
  .replace('Çin', 'CN')
  .replace('Amerika', 'US')
  .replace('Japonya', 'JP')
  .replace('Fransa', 'FR')
  .replace('Norveç', 'NE')
  .replace('İsveç',  'SN')
  
    const text = await snekfetch.get(`https://thevirustracker.com/free-api?countryTotal=${a}`);
    const body = text.body;
  let ülk = body.countrydata[0].info.title

    let korona = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('COVID-19 İstatistikleri')
    .setDescription(`**${ülk}** COVID-19 İstatistikleri`)
    .setThumbnail('https://www.diken.com.tr/wp-content/uploads/2020/01/corona_reuters-copy.jpg')
    .addField('*:microbe: Toplam Vaka:*',`\`\`〘 → ${body.countrydata[0].total_cases} ← 〙\`\` `, true)
    .addField('*:syringe: Toplam İyileşen:*',`\`\`〘 → ${body.countrydata[0].total_recovered} ← 〙\`\` `, true)
    .addField('*:dna: Toplam Enfekte:*',`\`\`〘 → ${body.countrydata[0].total_active_cases} ← 〙\`\` `, true)
    .addField('*:skull_crossbones: Toplam Ölümler:*',`\`\`〘 → ${body.countrydata[0].total_deaths} ← 〙\`\` `, true)
    .addField('*:test_tube: Bugünki Vakalar:*',`\`\`〘 → ${body.countrydata[0].total_new_cases_today} ← 〙\`\` `, true)
    .addField('*:warning: Bugünki Ölümler:*',`\`\`〘 → ${body.countrydata[0].total_new_deaths_today} ← 〙\`\` `, true)
    .addField('*:bangbang: Ciddi Vakalar:*',`\`\`〘 → ${body.countrydata[0].total_serious_cases} ← 〙\`\` `, true)
    .addField('*:flag_white:  Ülke:*',`\`\`〘 → ${ülk} ← 〙\`\` `, true)
    .addField('*:bust_in_silhouette:   Kullanıcı (sen):*',`\`\`〘 → ${message.author.username} ← 〙\`\` `, true)
    .setTimestamp()
    .setFooter('STAR BOT | COVID-19 İstatistik', client.user.avatarURL);
    
    message.channel.send(korona);
};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['corona', 'coronabilgi', 'corona-bilgi', 'korona', 'koronabilgi', 'korona-bilgi', 'virüs'],
  permLevel: 0 
};

exports.help = {
  name: 'korona',
  description: 'korona',
  usage: 'korona'
};
