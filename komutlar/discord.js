const Discord = require('discord.js');
var Jimp = require("jimp");
const cooldown = new Set()

exports.run = (client, message, args) => {
          if (cooldown.has(message.author.id)) {
    message.channel.send('Bekle **5** saniye sonra tekrar dene.')
  } else {

    let deden = message.mentions.users.first() ? message.mentions.users.first() : message.author
    

              message.channel.startTyping();
                        Jimp.read("https://i.postimg.cc/DfdtdN1f/Xi-R-Discord.png", function (erre, img) {
                                Jimp.read(`${deden.avatarURL}`).then(function (avatar) {
                                            Jimp.read("https://i.postimg.cc/28NS3grz/discord-logo.png").then(function (mascara) {
                                                avatar.resize(500, 500);
                                                mascara.resize(500, 500);
                                                avatar.mask(mascara, 0, 0);
                                                avatar.getBuffer(Jimp.MIME_PNG, (erri, buffer) => {
                                                    message.channel.send(`**${deden.username}** discord avatar logonuz.`, new Discord.Attachment(buffer, 'avatarxir.png'));
                                                    message.channel.stopTyping();
                                                })
                                            })
                                        })
                                    })
                            }

                                cooldown.add(message.author.id)
    setTimeout(() => {
      cooldown.delete(message.author.id)
    }, 5000)
  }
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["dc-avatar","dclogo","dcavatar"],
  permLevel: 0
};

module.exports.help = {
  name: 'discordavatar',
  description: 'Avatarınızı discord logosunun içerisine ekler',
  usage: 'discordavatar'
};