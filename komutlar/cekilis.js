const Discord = require("discord.js");
const moment = require("moment");
const ms = require("ms");
exports.run = async (client, message) => {
  var time = moment().format("Do MMMM YYYY , hh:mm");
  var room;
  var title;
  var duration;
  var currentTime = new Date(),
    hours = currentTime.getHours() + 3,
    minutes = currentTime.getMinutes(),
    done = currentTime.getMinutes() + duration,
    seconds = currentTime.getSeconds();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  var suffix = "AM";
  if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
  }
  if (hours == 0) {
    hours = 12;
  }
  var filter = m => m.author.id === message.author.id;

  message.channel.send(`Kanal adı gir`).then(msg => {
    message.channel
      .awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ["time"]
      })
      .then(collected => {
        let room = message.guild.channels.find(
          "sohbet",
          collected.first().content
        );
        if (!room) return message.channel.send("404 Not Found");
        room = collected.first().content;
        collected.first().delete();
        msg.edit("Çekiliş süresi belirle 1s 1m 1h 1d 1w örn").then(msg => {
          message.channel
            .awaitMessages(filter, {
              max: 1,
              time: 20000,
              errors: ["time"]
            })
            .then(collected => {
              if (!collected.first().content.match(/[1-60][s,m,h,d,w]/g))
                return message.channel.send("Geçersiz süre");
              duration = collected.first().content;
              collected.first().delete();
              msg.edit("Ödülümüz ne bakalım?").then(msg => {
                message.channel
                  .awaitMessages(filter, {
                    max: 1,
                    time: 20000,
                    errors: ["time"]
                  })
                  .then(collected => {
                    title = collected.first().content;
                    collected.first().delete();
                    msg.delete();
                    message.delete();
                    try {
                      let giveEmbed = new Discord.RichEmbed()
                        .setColor("#f558c9")
                        .setDescription(
                          `**Ödül: ${title}**\n🎉'a Basarak katılabilirsin!\nKalan Zaman: ${duration}\n**Başlama Zamanı:** ${hours}:${minutes}:${seconds} ${suffix}`
                        );
                      message.guild.channels
                        .find("name", room)
                        .send("Çekiliş başladı bum!", { embed: giveEmbed })
                        .then(m => {
                          let re = m.react("🎉");
                          setTimeout(() => {
                            let users = m.reactions.get("🎉").users;
                            let list = users
                              .array()
                              .filter(
                                u => (u.id !== m.author.id) !== client.user.id
                              );
                            let gFilter =
                              list[Math.floor(Math.random() * list.length) + 0];

                            let endEmbed = new Discord.RichEmbed()
                              .setAuthor(
                                message.author.username,
                                message.author.avatarURL
                              )
                              .setTitle(title)
                              .setColor("#f558c9")
                              .addField(
                                "Çekiliş Bitti!",
                                `Kazanan: ${gFilter}\nBitiş zamanı:`
                              )
                              .setTimestamp();
                            m.edit("ÇEKİLİŞ BİTTİ!", {
                              embed: endEmbed
                            });

                            message.guild.channels
                              .find("name", room)
                              .send(
                                `**Tebrikler ${gFilter}! \`${title}\` kazandın!**`
                              );
                          }, ms(duration));
                        });
                    } catch (e) {
                      console.log(e);
                    }
                  });
              });
            });
        });
      });
  });
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['çekiliş'],
  permLevel: 0
};
exports.help = {
  name: "çekiliş",
  description: "çekiliş",
  usage: "çekiliş"
};