const Discord = require('discord.js')
const moment = require('moment')
const loglar = require('../ayarlar.json') 

exports.run = (client, message, args) => {
    
const embed = new Discord.RichEmbed()

            .addField("Sunucu Adı", `${message.guild.name}`)
            .addField("Sunucu ID", `${message.guild.id}`)
            .addField("Sunucu Sahibi", `${message.guild.owner}`)
            .addField("Toplam Üye Sayısı", `${message.guild.memberCount}`)
            .addField("Oluşturulma Tarihi " , `${message.guild.createdAt}`)
         message.channel.sendEmbed(embed)
}
  
  exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['sunucu', 'sunucu-bilgi', 'sb'],
	permLevel: 0
  }

exports.help = {
	name: 'sunucubilgi',
	description: 'Bulunduğun sunucu hakkında bilgi verir.',
	usage: 'sunucubilgi'
}