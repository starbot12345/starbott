const Discord = require('discord.js');
const { RichEmbed } = require('discord.js');
const x = require("../emojiler.json")

exports.run = async (client, message) => {
  if (!message.guild) return message.channel.send('**Bu komut özel mesajlarda kullanılmaz!**');

      var voiceChannel = message.member.voiceChannel;
  const voiceChannelAdd = new RichEmbed()
  .setColor("#bf1818")
  .setDescription(`${x.carpi} **Bu komutu kullanabilmek için bir sesli kanalda olmalısın.**`)
  if (!voiceChannel) return message.channel.send(voiceChannelAdd);

  var permissions = voiceChannel.permissionsFor(client.user);
  if (!permissions.has('CONNECT')) {
    const warningErr = new RichEmbed()
    .setColor("#bf1818")
    .setDescription(`${x.carpi} **Sesli kanala katılabilmek için gereken iznim yok.**`)
    return message.channel.send(warningErr);
  }
    message.member.voiceChannel.join();
    return message.channel.send(`${x.tik} \`${message.member.voiceChannel.name}\` kanalına başarıyla katıldım.`);

  };
  
  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['join', 'katıl'],
   permlevel: 0
 };
  
  exports.help = {
    name: "müzikkatıl",
    description: "Botu olduğunuz odaya ekler.",
    usage: "müzikkatıl"
  };