const Discord = require('discord.js');

exports.run = async (client, msg, args) => {
	  if(args[0].length > 4) return msg.reply('Hey Dostum!Bu discrimde bir fazlalık var.Discrimler 4 basamaklı olur')
  if(args[0].length < 4) return msg.reply('Hey Dostum!Bu discrimde bir eksiklik var.Discrimler 4 basamaklı olur')
	  const s = [`asd1`, `asd2`, `asd3`]
  		const discrim = args[0] || msg.author.discriminator;
	        const users = client.users.filter(user => user.discriminator === discrim).map(user => user.tag);
	        if (users < 1) {
	       	    let embed = {
                	color: 'GREEN',
        	        description: `${discrim} bulunamadı!`,
	            };
            return msg.channel.send({embed});
        } else {
	      msg.channel.send(`
		${users.join('\n')}
		`, {split: true, code: "md"}
		)          
	}
}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0,
};
	  
exports.help = {
	name: 'discrim',
	description: 'İstediğiniz bir discrimi botun ekli olduğu sunucularda arar',
	usage: 'discrim',
};