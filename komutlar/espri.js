const Discord = require('discord.js');
const client = new Discord.Client();

const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5NzUwMzc5MjU4NTYzNzg4OCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTY1ODc1NTE0fQ.NCv9qZVJXZ2gJ_IQU4E2JQ71BIeFN8gI9XqE9c207VM', client) 

exports.run = (client, message) => {

dbl.hasVoted(message.author.id).then(voted => {
      if(!voted) 
return message.channel.send('Bu Komutu Kullanabilmek için 12 Saatte Bir https://is.gd/NEPfeM linkinden Bota Oy vermeniz Gerekmektedir. Onaylanması Birkaç Dakika Sürebilir, Lütfen Bekleyin.')
})
  dbl.hasVoted(message.author.id).then(voted => {
        if(voted) {

message.channel.send('Espri yükleniyor.').then(message => {
      var espriler = ['Seni görünce; \ngözlerim dolar, \nkulaklarım euro.','Kar üzerinde yürüyen adama ne denir. Karabasan.','Yıkanan Ton’a ne denir? Washington!','Gidenin arkasına bakmayın yoksa geleni göremezsiniz.','+Oğlum canlılara örnek ver. \n-Kedi, köpek. \n+Cansızlara örnek ver. \n-Ölü kedi, ölü köpek.','+Kanka ben banyoya 3 kişi giriyom. \n-Oha nasıl? \n+Hacı, Şakir ve ben. \n-Defol lan!','+Kocanızla ortak özelliğiniz ne? \n-Aynı gün evlendik.','+Evladım ödevini neden yapmadın? \n-Bilgisayarım uyku modundaydı, uyandırmaya kıyamadım.','+Bizim arkadaş ortamında paranın lafı bile olmaz. \n-Niye ki? \n+Çünkü hiç birimizin parası yok.','Annemin bahsettiği elalem diye bir örgüt var illuminatiden daha tehlikeli yemin ederim.','+Acıkan var mı ya? \n-Yok bizde tatlı kan var.','Yılanlardan korkma, yılmayanlardan kork.','+Baykuşlar vedalaşırken ne der? \n-Bay bay baykuş.','Beni Ayda bir sinemaya götürme, Marsta bir sinemaya götür.','Aaa siz çok terlemişsiniz durun size terlik getireyim.','Aklımı kaçırdım, 100.000 TL fidye istiyorum.'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`)
  }
)
                                     } 
  })
                                       }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['espri', 'espri-yap', 'yap-espri', 'yapbi-espri'],
  permLevel: 0
};

exports.help = {
  name: 'espri',
  description: 'Espri yapar.',
  usage: 'espri'
};