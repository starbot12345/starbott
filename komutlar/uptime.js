const Discord = require("discord.js");
const moment = require("moment");
const ayarlar = require('../ayarlar.json');

function convertMS(ms) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return {
        d: d
        , h: h
        , m: m
        , s: s
    };
};

exports.run = (bot, message, args) => {

    let prefix = ayarlar.prefix;
    if (!message.content.startsWith(prefix)) return;

    let u = convertMS(bot.uptime);
    let uptime = u.d + " gün : " + u.h + " saat : " + u.m + " dakika : " + u.s + " saniye"

    const duration = moment.duration(bot.uptime)
    let onlycode = bot.user.displayAvatarURL;
    const botembed = new Discord.RichEmbed()
        .addBlankField()
        .setTitle("")
        .setColor(`RANDOM`)
        .addField(`:recycle:`, `**Uptime :**  ${uptime}`)
        .setThumbnail(onlycode);

    message.channel.send(botembed);
}

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'uptime',
 description: 'Botun açık kalma süresini öğrenirsiniz.',
 usage: 'uptime'
};