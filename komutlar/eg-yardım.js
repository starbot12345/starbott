const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {

    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(`<a:kupa:754061641796026418> Eğlence Komutları <a:kupa:754061641796026418>`, `
**sb!1vs1** | Belirttiğiniz kullanıcıyla düello yaparsınız.
**sb!adamasmaca** | Adam Asmaca oynarsınız.
**sb!aranıyor** | Belirttiğiniz kullanıcıya aranıyor efekti verir
**sb!ascii** | Yazdığınız mesajı ascii artla yazar.
**sb!aşkölçer** | Bot belirttiğiniz kullanıcıya karşı olan aşkınızı ölçer.
**sb!emojiyazı** | Yazdığınız mesajı emojiyle yazar.
**sb!çayiç** | Çay içersiniz.
**sb!espri** | Bot espri yapar.
**sb!eval** | Evalle kod denersiniz.
**sb!exec** | Konsolda kod denersiniz.
**sb!token** | Botun tokenini öğrenirsiniz.
**sb!fakemesaj** | Belirttiğiniz kullanıcı için sahte mesaj gönderirsiniz.
**sb!hackle** | Belirttiğiniz kullanıcıyı hackler.
**sb!galatasaray** | Belirttiğiniz kullanıcıya Galatasaray efekti verir.
**sb!hapishane** | Belirttiğiniz kullanıcıya hapishane efekti verir.
`)
 message.channel.send(embed)
    
    let embeds = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(`<a:kupa:754061641796026418> Eğlence Komutları <a:kupa:754061641796026418>`,`
**sb!discord** | Belittiğiniz kullanıcıya discord efekti verir.
**sb!galatasaray** | Belirttiğiniz kullanıcıya Galatasaray efekti verir.
**sb!hapishane** | Belirttiğiniz kullanıcıya hapishane efekti verir.
**sb!kaçcm** | Bot malafatının uzunluğunu söyler.
**sb!kimlik** | Bot sahte bir kimlik oluşturur.
**sb!mesajdöndür** | Yazdığınız mesajı ters döndürür.
**sb!sarıl** | Belirttiğiniz kullanıcıya sarılırsınız.
**sb!rip** | Belirttiğiniz kullanıcıya R.I.P efekti verir.
**sb!tersavatar** | Belirtiğiniz kullanıcının pfpsini ters renklerine çevirir.
**sb!şanslısayım** | Bot şanslı sayınızı söyler.
**sb!şans** | Bot şansınızı ölçer.
**sb!efkar** | Bot efkarınızı ölçer.
**sb!wasted** | Belirttiğiniz kullanıcıya wasted efekti verir.
`)
message.channel.send(embeds)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eğlencekomutları', 'eğlence', 'eglence'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Kullanıcı komutlarını gösterir',
  usage: 'eğlence'
};