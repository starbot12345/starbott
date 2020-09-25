const Discord = require('discord.js');


exports.run = function(client, message,) {



const embed = new Discord.RichEmbed()

        .setColor("RANDOM")
        .setImage(message.guild.owner.avatarURL)
        .setDescription(message.guild.name + ` __**isimli**__ **sunucunun sahibi** ` + message.guild.owner +  ` __**adlı kişidir.**__`)
        .addField(`İşte Diğer Bilgiler`)
.addField(`Sunucu Sahibinin Kullanıcı Adı` + message.guild.username)
.addField(`Sunucu Sahibinin IDsi` + message.guild.ownerID)
.addField(`Sunucu Sahibinin Discrimi` + message.guild.owner.discriminator)
        .setFooter(message.author.tag + " tarafından istendi." );
        message.channel.send(embed)
        console.log("sb!kurucukim Komutu " + message.author.username + " Tarafından Kullanıldı.")
        console.log(`Komutunu Kullanan Kullanıcı= ${message.author.tag} | Kullanıcı ID= ${message.author.id} | Kullanılan Komut= ${message.content} | Sunucu= ${message.guild.name}`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kurucukim'],
  permLevel: 0
};

exports.help = {
  name: 'kurucukim',
  description: 'Sunucunun kurucusunu gösterir.',
  usage: 'kurucukim'

}