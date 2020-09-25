const Discord = require('discord.js');


exports.run = async(bot, message, args) => {
var request = require('request');

request('https://api.eggsybot.xyz/ataturk', function (error, response, body) {
    if (error) return console.log('Hata:', error);
    else if (!error) {
        var info = JSON.parse(body);
      let embed = new Discord.MessageEmbed()
      .setTitle("Atam sen rahat uyu! ❤")
      .setImage(`${info.link}`)
        message.channel.send(embed);
    }
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['atatürk'],
  permLevel: 0
};

exports.help = {
  name: 'atatürk',
  description: 'Rastgele bir Atatürk fotoğrafı yollar.',
  usage: 'atatürk',
  kategori: 'kullanıcı'
};