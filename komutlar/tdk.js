const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  if(!args[0]) return message.reply('Bir kelime yazmalısın')


  
    const text = await snekfetch.get(`https://kyoya.cf/api/tdk?ara=${args.join(' ')}`);
    const body = text.body;
  let kelime = body.kelime[0].info.title

    let tdk = new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField(`Anlam = \`\`\` ${body.kelime[0].anlam} \`\`\``)
    .setFooter('STAR BOT | TDK APİ', client.user.avatarURL);
    
    message.channel.send(tdk);
};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['tdk'],
  permLevel: 0 
};

exports.help = {
  name: 'tdk',
  description: 'tdk',
  usage: 'tdk'
};
