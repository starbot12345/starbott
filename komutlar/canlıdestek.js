const Discord = require('discord.js');

exports.run = async(client, message, args) => {
   
  let isEnabled;
  message.channel.send(`Birazdan yapımcım sizinle ilgilenecektir lütfen bekleyin.`);
  let chan = message.channel;
  let destekKanal = "607884356303716393";/// buraya destek atılıcak kanalın ID sini yazın
  const embed = new Discord.MessageEmbed()
      .addField('Dikkat', `Canlı Destek Talebi`)
      .setColor("RANDOM")
      .addField(`Bilgiler`, `Sunucu: ${message.guild.name} \n Kanal: ${message.channel.name} \n Destek İsteyen: ${message.author.tag}`)
      .setFooter("STARBOT| Canlı Destek")
  client.channels.get(destekKanal).send(embed);
  const collector = client.channels.cache.get(destekKanal).createCollector(message => message.content.startsWith(''), {
    time: 0
  })
  client.channels.get(destekKanal).send(`Destek çağrısına bağlanmak için \`bağlan\`, iptal etmek için \`iptal\` yazınız.`)
  collector.on('message', (message) => {
    if (message.content === 'iptal') collector.stop('aborted')
    if (message.content === 'bağlan') collector.stop('success')
  })
  collector.on('end', (collected, reason) => {
    if (reason === 'time') return message.channel.send(`Canlı destek talebiniz zaman aşımına uğradı yapımcım muhtemelen afk ya da geç bi saatte canlı destek istediysen uyuyo olabilir eğer öyleyse yarın bir daha denersin  💚  .`)
    if (reason === 'aborted') {
      message.channel.send(`Canlı destek talebiniz yapımcım tarafından reddedildi.`)
      client.channels.get(destekKanal).send(`Canlı destek konuşmasını bitirdin.`)
    }
    if (reason === 'success') {
      client.channels.get(destekKanal).send(`Canlı destek talebi kabul edildi. İptal etmek için \`iptal\` yazınız.`)
      chan.send(`${message.author}, canlı destek talebiniz yapımcım tarafından kabul edildi. İptal etmek için \`iptal\` yazınız.`)
      isEnabled = true
      client.on('message', message => {
        function contact() {
          if (isEnabled === false) return
          if (message.author.id === client.user.id) return
          if (message.content.startsWith('iptal')) {
            message.channel.send(`Canlı destek konuşmasını kapattın.`)
            if (message.channel.id === chan.id)
              client.channels.get(destekKanal).send(`Canlı destek talebi kullanıcı tarafından iptal edildi.`)
            if (message.channel.id === destekKanal) 
              chan.send(`Yapımcım konuşmayı bitirdi bizimle iletişime geçtiğin için teşekkür ederiz bir daha sorun olursa  bu şekilde ulaşabilirsin  💚`)
            return isEnabled = false
          }
          if (message.channel.id === chan.id) 
            client.channels.get(destekKanal).send(`Talepte Bulunan Kişi : ${message.author.tag} : ${message.content}`)
          if (message.channel.id === destekKanal) 
            chan.send(`⚡️ Yapımcım ⚡️: ${message.author.tag} : ${message.content}`)
        }
        contact(client)
      })
    }
  })
}

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['canlıdestek'],
  permLevel: 0
};

exports.help = {
  name: 'canlıdestek',
  description: 'Yetkililerle canlı desteğe geçersiniz.',
  usage: 'canlıdestek'
};
 