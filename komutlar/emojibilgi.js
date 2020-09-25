const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let emojiname = args[0];
    const emoji = (message.guild.emojis.find("name", `${emojiname}`))
    if (!emojiname) return message.channel.send("Emoji ismi belirtmediniz")
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(`${emoji.url}`)
    .addField("Emojinin ismi", `${emojiname}`)
    .addField("Emoji ID", `${emoji.id}`)
    .addField("Link", `${emoji.url}`)
    .addField("Kullanım Şekli", "<a:${emojiname}:${emoji.id}>")
    .setTimestamp()
    message.channel.send(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['emojibilgi'],
    permLevel: 0
}

exports.help = {
    name: 'emojibilgi',
    description: 'İsmini yazdığınız emoji hakkında bilgi verir',
    usage: 'emojibilgi'
}