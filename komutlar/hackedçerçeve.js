const Discord = require("discord.js");
var Jimp = require('jimp');

exports.run = async (client, message, args) => {
    var user = message.mentions.users.first() || message.author;
    if (!message.guild) user = message.author;
   
    message.channel.send(`:timer: Bu Biraz zaman alabilir // Lütfen Bekleyin.`).then(m => m.delete(1000));

Jimp.read(user.avatarURL(), (err, image) => {
    image.resize(315, 310)
    Jimp.read("http://kisi.deu.edu.tr//akcan.poyraz/1-580x386.JPG", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./img/snip/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./img/snip/${client.user.id}-${user.id}.png`));
        }, 1000);
    });

});
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hackpp', 'hackavatar', 'hackedpp', 'hackedavatar'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'hacked',
    description:  'Hacked Efekti',
    usage: 'hacked'
  };