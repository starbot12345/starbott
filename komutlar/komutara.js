const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  if (!args.length || args.join('').length < 2) {
    return message.reply('lütfen komut adı giriniz. *(2 harf veya 2 harften fazla)*')
  }

  args = args.join('').toLowerCase();
  let commands = client.commands.map(c => c.help.name.toLowerCase()).filter(c => c.includes(args));
  if (commands.length === 0) {
    return message.reply('komut bulunamadı.')
  }
const eembed = new Discord.MessageEmbed()
.setColor(0x36393E)
.setTitle('Komut Arama')
.setDescription(`*${args}* içeren ${commands.length} komut bulundu.`)
.addField('Komutlar',`${commands.join(`\n`)}`)
  await message.channel.send(eembed);
};

exports.conf = {
  aliases: [ 'komut-ara' ],
  enabled: true,
  permLevel:0,
  guildOnly: true
};

exports.help = {
  name: 'komutara',
  description: 'Botta olan komutu ararsınız.',
  category: 'Kullanıcı',
  usage: 'komutara <komut adı>',
  example: ['komutara <komut adı>' ]
};