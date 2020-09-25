const discord = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`kick` adlı komutu özel mesajlarda kullanamazsın.')
    if (!message.member.hasPermission("KİCK_MEMBERS")) return message.channel.send(`Bu komutu kullanabilmek için \`Üyeleri Yasakla\` yetkisine sahip olmalısın.`);

  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('`mod-log` kanalını bulamıyorum.');
  if (reason.length < 1) return message.reply('Kick sebebini yazmalısın.');
  if (message.mentions.users.size < 1) return message.reply('Kimi kickleyeceğini yazmalısın.').catch(console.error);

  if (!message.guild.member(user).kickable) return message.reply('Yetkilileri kickleyemem.');
  guild.members.kick(user, 2);

  const embed = new Discord.MessageEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Kick')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', reason);
  return guild.channels.cache.get(modlog.id).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kick'],
  permLevel: 5
};

exports.help = {
  name: 'kick',
  description: 'İstediğiniz kişiyi kickler.',
  usage: 'kick [kullanıcı] [sebep]'
};