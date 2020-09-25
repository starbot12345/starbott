const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
 if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu komut için yeterli iznin **yok!**')
  
  if (!args[0]) return message.channel.send('Hangi işlemi **yapacaksınız?** **[**`kur` **veya** `sil`**]**')
  if (args[0] !== 'kur' && args[0] !== 'sil') return message.channel.send('Hangi işlemi **yapacaksınız?** **[**`kur` **veya** `sil`**]**')
  
  if (args[0] == 'kur') {
if (db.has(`üyekanal_${message.guild.id}`)) return message.channel.send('Zaten istatistik **kurulu!**')
if (db.has(`kulkanal_${message.guild.id}`)) return message.channel.send('Zaten istatistik **kurulu!**')
if (db.has(`neblmkanal_${message.guild.id}`)) return message.channel.send('Zaten istatistik **kurulu!**') 
    
let kategori = await message.guild.createChannel("SUNUCU PANELİ", "category", [{
  id: message.guild.id,
  deny: ["CONNECT"]
}])
message.guild.createChannel(`Toplam Üye Sayısı •  ${message.guild.memberCount}`, "voice").then(üye => {
message.guild.createChannel(`Kullanıcı Sayısı • ${message.guild.members.filter(m => !m.user.bot).size}`, 'voice').then(kul => {
message.guild.createChannel(`Bot Sayısı • ${message.guild.members.filter(m => m.user.bot).size}`, 'voice').then(neblm => {
üye.setParent(kategori.id)  
kul.setParent(kategori.id)  
neblm.setParent(kategori.id)
db.set(`üyekanal_${message.guild.id}`, üye.id)
db.set(`kulkanal_${message.guild.id}`, kul.id)
db.set(`neblmkanal_${message.guild.id}`, neblm.id)
  
  message.channel.send(' İstatistik başarıyla **ayarlandı!**')
})
})
})
}
  
  if (args[0] == 'sil') {
    let üye = await db.fetch(`üyekanal_${message.guild.id}`)
    if (!üye) return message.channel.send('Zaten istatistik **kurulu değil!**')
    let kul = await db.fetch(`kulkanal_${message.guild.id}`)
    if (!kul) return message.channel.send(' Zaten istatistik **kurulu değil!**')
    let neblm = await db.fetch(`neblmkanal_${message.guild.id}`)
    if (!neblm) return message.channel.send(' Zaten istatistik **kurulu değil!**')
    let üye2 = message.guild.channels.get(üye)
    if (!üye2) return message.channel.send(' İstatistik kurulmuş fakat, kurulu kanalı **bulamadım.**')
    let kul2 = message.guild.channels.get(kul)
    if (!kul2) return message.channel.send(' İstatistik kurulmuş fakat, kurulu kanalı **bulamadım.**')
    let neblm2 = message.guild.channels.get(neblm)
    if (!neblm2) return message.channel.send(' İstatistik kurulmuş fakat, kurulu kanalı **bulamadım.**')
    
    üye2.delete()
    kul2.delete()
    neblm2.delete()
    
    db.delete(`üyekanal_${message.guild.id}`)
    db.delete(`kulkanal_${message.guild.id}`)
    db.delete(`neblmkanal_${message.guild.id}`)
    
    message.channel.send(' İstatistik başarıyla **silindi!**')
  }
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['panelkur'], 
  permLevel: 4
};

exports.help = {
  name: 'stat', 
  description: '', 
  usage: '' 
};