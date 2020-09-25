const Discord = require("discord.js");

exports.run = async (bot, message, args, color, prefix) => {
if(message.author.id !== "549203468414615562") return;
   if (args[0] === "bot.token") 
    return message.channel.send(`Buyur Sahip Token : ||https://giant.gfycat.com/PettyRigidBronco.webm|| `);
  
  if (args[0] === "message.channel.send(bot['token'])") 
    return message.channel.send(`Buyur Sahip Token : ||https://giant.gfycat.com/PettyRigidBronco.webm|| `);
  
  if (args[0] === "message.channel.send(bot.token)") 
    return message.channel.send(`Buyur Sahip Token : ||https://giant.gfycat.com/PettyRigidBronco.webm|| `);
  try {
        let codein = args.join(" ");
        let code = eval(codein);
        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        message.channel.send(`\`\`\`js\n${code}\n\`\`\``)
    } catch(e) {
        message.channel.send(`HATA \`\`\`js\n${e}\n\`\`\``);
    }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['eval'],
  permLevel: 0
};


exports.help = {
  name: 'eval',
  description: 'Kod denersiniz.',
  usage: 'eval <kod>'
};