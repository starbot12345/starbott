const Discord = require('discord.js');

  exports.run = function(client, message) {
    
  message.channel.send(`Ping **${client.ping}** ms! 
Mesaj pingi **${new Date().getTime() - message.createdTimestamp}** ms!`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pong'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun pingini gösterir.',
  usage: 'ping'
};