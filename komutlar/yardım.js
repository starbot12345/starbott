const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  
  const wacawacaa = (client.emojis.get("606165715963215892"))
  const yandanyandankızlaar = (client.emojis.get("606163648431259658"))
  const rainbowheart = (client.emojis.get("648566957691371528"))
  const popcornparrot = (client.emojis.get("648566537774694421"))
  const tada = (client.emojis.get("648559594402218007"))

  if (!params[0]) {
    let embed = new Discord.RichEmbed()
    .setFooter('STAR BOT', client.user.avatarURL)
    .setColor("0x36393E")
    .setThumbnail("https://cdn.discordapp.com/attachments/569234063869739021/608770926762393635/giphy.gif")
    .addField("Komutlar-Kategoriler", `

| **sb!kullanıcı ** Kullanıcı komutları. | 

| **sb!müzik** Müzik komutları. | 
          
| **sb!yetkili** Yetkili Komutları. | 

| **sb!bot** Bot Komutları. | 

| **sb!eğlence** Eğlence Komutları. | 



`)
    .addField(`STAR BOT Bağlantılar` , "**[Botu Sunucuna Ekle](https://discordapp.com/oauth2/authorize?client_id=597503792585637888&scope=bot&permissions=2146958847)** \n**[Destek Sunucum](https://discord.gg/3vUYVMK)** \n**[DBLde Oy Ver](https://discordbots.org/bot/597503792585637888/vote)** \n**[WebSitem](https://bot-starbot.glitch.me)**")
    message.channel.send(embed)
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.sendCode('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + `sb!${command.help.usage}`);
      
       console.log("sb!yardım Komutu " + message.author.username + " Tarafından Kullanıldı.")
        console.log(`Komutunu Kullanan Kullanıcı= ${message.author.tag} | Kullanıcı ID= ${message.author.id} | Kullanılan Komut= ${message.content} | Sunucu= ${message.guild.name}`)
      
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help', 'h','y','yardim','menu','menü','yardım'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir',
  usage: 'yardım <komut>'
};