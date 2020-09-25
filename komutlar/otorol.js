const fs = require ('fs')
const Discord = require('discord.js')
var sunucuyaözelayarlarOtorol = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
const x = require("../emojiler.json")


exports.run = async (bot, message, args) =>

{
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${x.carpi} Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

  
  	let profil = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
  var mentionedChannel = message.mentions.channels.first();
  if (!mentionedChannel && args[0] !== "sıfırla") return message.channel.send(`${x.carpi} Ayarlamam İçin Bir Rol Etiketlemeli veya Adını yazmalısın. \nRolü Etiketleyemiyorsan **Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma** \nÖrnek Kullanım : sb!otorol #kanal Roladı`);
  if (message.guild.member(message.author.id).hasPermission(0x8))

    {
let mentionedRole = message.mentions.roles.first() || message.guild.roles.find("name", args.slice(1).join(' '))
if (!mentionedRole) return message.channel.send(`${x.carpi} **Doğru Kullanım = sb!otorol #kanal Roladı**`);


	if(!profil[message.guild.id]){

		profil[message.guild.id] = {

			sayi: mentionedRole.id,
      kanal: mentionedChannel.id
		};
	}

	profil[message.guild.id].sayi = mentionedRole.id
  profil[message.guild.id].kanal = mentionedChannel.id

	fs.writeFile("./otorol.json", JSON.stringify(profil), (err) => {
		console.log(err)

	})

	const embed = new Discord.RichEmbed()
		.setDescription(`${x.tik} Otorol başarıyla ${mentionedRole} olarak ayarlandı! \nOtorol Mesaj kanalı başarıyla ${mentionedChannel} olarak ayarlandı.\n\nOto Rol'ü kapatabilmek için **sb!otorolsıfırla** yazabilirsiniz!`)
		.setColor("RANDOM")
		.setTimestamp()
	message.channel.send({embed})
}

}



exports.conf =
{
  enabled: true,
  guildOnly: false,
  aliases: ["setautorole", "otorolayarla", "otoroldeğiştir"]
}

exports.help =
{
  name: 'otorol',
  description: 'Sunucuya Girenlere Verilecek Olan Otorolü Ayarlar.',
  usage: 'otorol'
}