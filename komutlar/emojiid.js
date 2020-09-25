const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let emojiname = args[0];
    const emoji = (message.guild.emojis.find("name", `${emojiname}`))
    if (!emojiname) return message.channel.send(":warning: Hangi emojinin ID'sine ulaşmak istediğini yazmalısın! **Örnek:**`sb!emojiid <emojiAdı>`")
    const embed = new Discord.MessageEmbed()
    .setColor("#ffc100")
    .setThumbnail(`${emoji.url}`)
    .addField("Emojinin ismi", `${emojiname}`)
    .addField("Emoji ID", `${emoji.id}`)
    .addField("Link", `${emoji.url}`)
    .setTimestamp()
    message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['emojiid'],
    permLevel: 0
}
exports.help = {
    name: 'emojiid',
    description: 'İsmini yazdığınız emojinin id sini verir',
    usage: 'emojiid'
} 