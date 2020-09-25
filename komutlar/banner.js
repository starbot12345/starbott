const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
  if(db.fetch(`bakim`)) {
  if(message.author.id !== "549203468414615562") {return message.channel.send('Şuanda Bakım Modu Açıktır.')}
}
  
  const talkedRecently = new Set();         
  if (talkedRecently.has(message.author.id)) {
           return message.channel.send("`5` Saniye de Bir Kullanabilirsin - " + message.author);
    } else {

           // the user can type the command ... your command code goes here :)

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
        message.delete();
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 5000);// Şuan 5 Saniyedir Değiştirebilirsiniz.
    }
  
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`Lütfen yazı yazın!`)
  const linqo = `https://dummyimage.com/800x450/e6ff05/6a00ff.png&text=${yazi}`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setTitle("Buyur Banner,")
  .setColor("#2ECC71")
  .setImage(linqo)
  .setFooter('Banner Oluşturuldu!')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'banner',
    description: 'Yazdığınız yazıyı bannera çevirir.',
    usage: 'banner <yazı>'
}