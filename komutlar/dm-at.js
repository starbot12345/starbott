const Discord = require('discord.js');
exports.run = function(client, message, args) {
    if (message.author.id === "549203468414615562") {
    let dmkisi = message.mentions.users.first();
    if (!dmkisi) return message.channel.send(':x: **DM Atacağın Kişiyi Seçmelisin**');
    let dm = args.slice(1).join(' ');
    if (!dm) return message.channel.send(':x: **DM Atcağım Yazıyı Unuttun!**');
    message.delete();
    const dmat = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('Yapımcımdan Sana Mesaj Geldi !')
    .addField('DM Atan :', `➽ <@${message.author.id}>`)
    .addField('DM İse :', `➽ ${dm}`)
    .setFooter('Direk Mesaj | STARBOT')
    dmkisi.send(dmat);
    const dmtamam = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('İşlem Tamamlandı :white_check_mark:')
    .setFooter('Direk Mesaj | STARBOT')
    message.channel.send(dmtamam);
    } else {
        message.channel.send(':x: **Bu Komutu Sadece Yapımcım Kullanabilir!**');
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'dm-at',
  description: 'Özel komut.',
  usage: 'dm'
};