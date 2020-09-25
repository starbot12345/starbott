const dcbro = require("discord.js");
exports.run = async (client, message, args) => {
  var req = require("request");
  var bstag = args[0];
  if (!bstag) {
    message.channel.send("Lütfen kullanıcı tagını giriniz.");
  } else {
      var ayarçek = {
      method: "GET",
      url: `https://api.starlist.pro/v1/player?tag=${bstag}`,
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJzdGFybGlzdC5wcm8iLCJhdWQiOiJzdGFybGlzdC5wcm8iLCJzdWIiOiI1NDA4ODE5MjQ4NjUxMzA0OTgiLCJpYXQiOjE1OTAyNTM5ODUsImp0aSI6IjFQb1ZzY3hlSE5Zcm9VT3BWVWxBdk1EVTczVFhLeXpRMWNUNWF2cWVPNWM4Q2dTbTJXMUtRaGdoWllyaWU0enl6b0NKRGRNWUdhQTVXdzJUeHVSSWpPS1d2ODE4a1FQblFXdDRTajZMd2EzTkwycEd5b000VG5WS245bXVGSlNFQzc0bFhLazBEV2k1aEMyTm5PTEZySHdxREpaVkNMa0JyOWRzbUpxU2l0d3FyM3o5STBaM2NiSHAxbTBHWGFqQmE2aWZiazA2RFpISVlkVnV5amw0ZUVQakU4aGRmeFpnUkl4dDJBcE5Qd3FOMDV5dlVuN0dPNlJKVHpBZklYUi0xNyJ9.26mbC3IqH-e_jrjJq2V0S-Hdi9ffwwj0o05DfnyNQReyQeenZuXa4mh00I6tVzuDXfG5XuuESMRageMB2z5CQw"
      }
    };
    req(ayarçek, function(hata, tepki, oyunucue) {
      if (hata) throw new Error(hata);
      oyunucue = JSON.parse(oyunucue);
      console.log(oyunucue);
      if (oyunucue.code) {
        if (oyunucue.message) {
          message.reply("Yanlış tag!\n Brawl Stars Taglarında Sadece Şu Şeyler Bulunur : `0`, `2`, `8`, `9`, `P`, `Y`, `L`, `Q`, `G`, `R`, `J`, `C`, `U`, `V`");
        } else {
          message.channel.send("Maalesefki Bir Şeyler Ters Gitti." + oyunucue.code);
        }
      } else {
        const bembed = new dcbro.MessageEmbed()
          .setTitle(`${oyunucue.name}`)
          .setDescription(`${oyunucue.name} Adlı Oyuncunun Hesap Özellikleri.`)
          .addField(`Kupası :`, `${oyunucue.trophies}`)
          .addField(`Seviyesi ;`, `${oyunucue.expLevel}`)
          .addField(`Toplam Zaferi ;`, `${oyunucue.victories}`)
          .addField(`Kaç Karakteri Var :`, `${oyunucue.brawlers.length}`)
          .setColor("RANDOM")
          .setFooter("LootBot | Brawl Stars Profil Gösterme")
        message.channel.send(bembed);
      }
    });
    }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bsprofil","bs","brawlstars","brawl"],
  permLevel: 0
};
exports.help = {
  name: "brawlll",
  description: "s",
  usage: "Made By ElRamazan#1162"
};