const Discord = require('discord.js');

exports.run = async (client, message, params) => {
  var channel = client.channels.find('754993646549336175')
    const asdf = await client.channels.get(message.channel.id).createInvite()
  message.delete();
  const embed = new Discord.RichEmbed()
  .setTitle("» Mehmet")
  .setDescription("**Yapımcımı Çağırdım**")
  .setFooter("Uzun Bir Süre Dönülmezse sb!davet'ten Destek Sunucusuna Gelin!")
 message.channel.send(embed)
      const invite = new Discord.RichEmbed()
  .setAuthor("» Talep")
  .addField('**» Kullanıcı Adı: **', message.author.username + '#' + message.author.discriminator)
  .addField('**» Sunucu Adı: **', message.guild.name)
  .setDescription(asdf.url)
      channel.send(invite)
};
  
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çağır'],
  permLevel: 2
};

exports.help = {
  name: 'çağır',
  description: 'Botun Yapımcısına Mesaj Gönderir.',
  usage: 'çağır'
};