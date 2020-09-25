const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.MessageEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`ban` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('`mod-log` kanalını bulamıyorum.');
  if (reason.length < 1) return message.reply(`<a:200iq:748584530817843300> Kendini Çok Zeki Sanıyorsun Herhalde.Hadi Ne Duruyorsun Ban Sebebini Yaz!`);
  if (message.mentions.users.size < 1) return message.reply(`<a:200iq:748584530817843300> Kendini Herhalde Hala Çok Zeki Sanıyorsun.Kimi Banlayacığımı Etiketleseydin Banlardım.Hadi Ne Duruyorsun Etiketle!`).catch(console.error);

  if (!message.guild.member(user).bannable) return message.reply(`<a:200iq:748584530817843300> Vay Çakal Seni Yetkiliyi Banlayacaksın Ha.Yetkilileri Banlayamam! `);
  guild.members.ban(user, 2);

  const embed = new Discord.MessageEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Ban')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator} ID =(${user.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', reason);
  return guild.channels.cache.get(modlog.id).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ban'],
  permLevel: 3
};

exports.help = {
  name: 'ban',
  description: 'İstediğiniz kişiyi banlar.',
  usage: 'ban [kullanıcı] [sebep]'
};