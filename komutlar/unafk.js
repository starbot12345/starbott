const discord = require('discord.js');
const client = new discord.Client();

exports.run = (client, msg) => {
 
               var e = new discord.RichEmbed()
         
        .setColor("RANDOM")
        .setAuthor("AFK MODU!")
        .setDescription(`<@${msg.author.id}> Başarı İle Afk Modundan Çıkış Yaptın!<a:ok:589407612227944461> `)
       msg.channel.send(e).then(msg => msg.delete(5000));

     msg.member.setNickname(`${msg.author.username}`);
  

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['unafk'],
  permLevel: 0,
    kategori:'kullanıcı'
};

exports.help = {
  name: 'unafk',
  description: 'Afk Tagınızı alır',
  usage: 'unafk'
};