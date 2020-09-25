const Discord = require('discord.js');
const shorten = require('isgd');

exports.run = (client, message, args, tools) => {
    message.delete();
    if (!args[0]) return message.channel.send('  \n » Kullanım: \`sb!kısalt <URL> <isim>\`   ')

   const loading = (client.emojis.get("611199415696490506"))
  
     message.channel.send(`${loading} Link Kısaltılıyor Lütfen Bekleyiniz... `).then(m => m.delete(1000));
  
    if(!args[1]) {

        shorten.shorten(args[0], function(res) {
            if (res.startsWith('Hata:')) message.channel.send('Lütfen Doğru URL Girin');

            message.channel.send(`\`<${res}>\``);
        })
    } else {
        shorten.custom(args[0], args[1], function(res) {

            if (res.startsWith('Hata:')) message.channel.send(`\`<${res}>\``);

            message.channel.send(`**<${res}>**`);
        })
    }

};


exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['kısalt'],
permLevel: 0,
kategori: 'eğlence'
};

exports.help = {
name: 'link-kısalt',
description: 'İstediğiniz URLni Kısaltır. ',
usage: 'kısalt'
};