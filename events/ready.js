const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar Yüklendi!`);
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} İsmi İle Giriş Yapıldı!`);
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.size + ` Adet Kanala, ` + client.guilds.size + ` Adet Sunucuya Ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` Kullanıcıya Hizmet Veriliyor!`)
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı! Ve Giriş Yaptı`);
    client.user.setActivity(`${prefix}yardım + ${client.guilds.size} Sunucu + ${client.users.size} Kullanıcı`);
    client.user.setActivity(`Şuanda toplam ${client.commands.size} komudum bulunmakta.Her Geçen Gün Daha Fazla Komut Eklenmektedir.`)
    client.user.setStatus("online");
    var musics = [
      
        "Bot VDS (Sanal Sunucuya) geçiriliyor.",
      "Lütfen Sabırla Bekleyiniz",
      "BAKIM :)"
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(musics.length-0+1)+0);

        client.user.setActivity(musics[random], "" ); 
        }, 2 * 7500);
};