const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
let talkedRecently = new Set();
module.exports = message => {
  if (talkedRecently.has(message.author.id)) {
    return;
  }
  talkedRecently.add(message.author.id);
    setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 4500);
}
const db = require('quick.db');

module.exports = async message => {
  let client = message.client
  if (message.author.bot) return
  const neblm = new RegExp(`^<@!?${client.user.id}>`)
  let prefix = message.content.match(neblm) ? message.content.match(neblm)[0] + " " : "sb!";
  if (message.content.indexOf(prefix) !== 0) return
  let command = message.content.match(neblm) ? message.content.split(' ')[1] : message.content.split(' ')[0].slice(prefix.length)
  let params = message.content.match(neblm) ? message.content.split(' ').slice(2) : message.content.split(' ').slice(1)
  let perms = client.elevation(message)
  let cmd

  if (client.commands.has(command)) cmd = client.commands.get(command)
  else if (client.aliases.has(command)) cmd = client.commands.get(client.aliases.get(command))

  if (cmd) {
    
    client.on('message', async message => {
  const prefixes = ['sb!', '\\?', '\\/', `<@!?${client.user.id}> `];
  const prefixRegex = new RegExp(`^(${prefixes.join('|')})`);
  const prefix = message.content.match(prefixRegex);

  // Go ahead with the rest of your code!
});

    
    if (perms < cmd.conf.permLevel) return
    cmd.run(client, message, params)
   }
}
