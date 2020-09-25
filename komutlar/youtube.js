const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  


    let youtube = args.slice(0).join('+');

        let link = `https://www.youtube.com/results?search_query=` + youtube;
        if(!youtube)return message.reply(`Please enter a word `)
        if(!link)return message.reply("Console error")
        let embed = new Discord.RichEmbed()
 
         
     .setColor("RED")
         
          .setTimestamp()
        
          .addField('Aktivasyon:', ' Youtubede Aranıyor ')
          .addField("Aranan:", `${args.slice(0).join(' ')}`)

          .addField('Link:', `${link}`)
         
          .setFooter("Tarafından İstendi", message.author.avatarURL);
          
              message.channel.send(embed);

        
    
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yt', 'youtube', 'ytara', 'youtubeara'],
  permLevel: 0
};

exports.help = {
  name: 'youtube',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'youtube'
};