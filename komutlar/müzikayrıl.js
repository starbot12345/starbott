const Discord = require('discord.js');
const { RichEmbed } = require('discord.js');
const x = require("../emojiler.json")

exports.run = async (client, message) => {
  if (!message.guild) return message.channel.send(`${x.carpi} **Bu komut özel mesajlarda kullanılmaz!**`);

    //const a = new RichEmbed()
    //.setColor("#bf1818")
    //.setDescription(`:x: **Bu komutu kullanabilmek için benimle aynı sesli kanalda olmalısın.**`)  
 // if (!message.member.voiceChannel) return message.channel.send(':x: **Bu komutu kullanabilmek için benimle aynı sesli kanalda olmalısın.**')
  
 if (!message.member.voiceChannel) return message.channel.send(`${x.carpi} **Beni bulunduğum odadan çıkarmak için benimle aynı odada olmalısın.**`);
 
 message.member.voiceChannel.leave();
    return message.channel.send(`\`${message.member.voiceChannel.name}\` **kanalından başarıyla ayrıldım.**`);
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['ayrıl', 'git', 'çık'],
   permlevel: 0
 };
  
  exports.help = {
    name: "müzikayrıl",
    description: "Oynatılan/çalan şarkıyı kapatır ve odadan çıkar.",
    usage: "müzikayrıl"
  };