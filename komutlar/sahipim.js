const Discord = require('discord.js');


exports.run = function(client, message,) {

let avatar = "https://cdn.discordapp.com/avatars/549203468414615562/a_8e8fb2d35e9be45dd3d75961aa4d47c2.gif?size=2048"


const embed = new Discord.RichEmbed()
        .setTitle(`Geliştirici`)
        .setDescription(`**Nitrolu Memo Dayı©#9999**`)
        .setImage(avatar)
        .setColor(3447003)
        .addField("• Davet Linki •", "[Botu Sunucuna Ekle](https://discordapp.com/oauth2/authorize?client_id=597503792585637888&scope=bot&permissions=805829694)", true)
        .addField("• Sunucu Linki •", "[Destek Sunucusu](https://discord.gg/DGe6arH)", false)
        .setFooter(message.author.tag + "tarafından istendi." );
        message.channel.send(embed)
        console.log("sb!sahip Komutu " + message.author.username + " Tarafından Kullanıldı.")
        console.log(`Komutunu Kullanan Kullanıcı= ${message.author.tag} | Kullanıcı ID= ${message.author.id} | Kullanılan Komut= ${message.content} | Sunucu= ${message.guild.name}`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sahip'],
  permLevel: 0
};

exports.help = {
  name: 'sahip',
  description: 'Bot sahibinin profilini gösterir.',
  usage: 'sahip'

};