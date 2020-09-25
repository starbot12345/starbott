const discord = require('discord.js')
exports.run = async (client, message, args) => {
    try {
      let invite = await message.channel.createInvite({
        maxAge: args.age * 60,
        maxUses: args.uses
      });
  
      message.channel.send('Bu Sunucunun Davet Linkini Kurdum.\n'
        + 'Link Aşağıda'
       + 'Bu Sunucun Davet Linki \n' +
        `https://discord.gg/${invite.code}`).catch(e => {
        client.log.error(e);
      });
    }
    catch (e) {
      client.log.error(e);
    }
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['create-link','davetal'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'davet-kur',
    description: 'Botunuzun davet linkini kurar.',
    usage: 'davet-kur'
  };