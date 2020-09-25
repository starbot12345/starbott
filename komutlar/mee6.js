const Discord = require("discord.js");
var Jimp = require('jimp');

exports.run = async (client, message, args) => {
    var user = message.mentions.users.first() || message.author;
    if (!message.guild) user = message.author;
   
    message.channel.send(`⏲ | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));

Jimp.read(user.avatarURL, (err, image) => {
    image.resize(1, 325)
    //image.greyscale()
    //image.gaussian(3)
    Jimp.read("https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.png?size=2048", (err, avatar) => {
        avatar.resize(310, 325)
        image.composite(avatar, 1, 0).write(`./img/snip/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./img/snip/${client.user.id}-${user.id}.png`));
        }, 1000);
    });

});
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mee6'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'tr',
    description: 'tr',
    usage: 'tr'
  };