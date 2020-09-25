const ms = require("ms");

exports.run = (client, message, args, func) => {
  
    var user = message.mentions.users.first();
    if(!user) return message.channel.send("Kime Rol Vereceğimi Yazmadın!")
    var role = message.metions.roles.first();
    if(!role) return message.channel.send("Vereceğim Rolü Belirtmeyi Unuttun!")
    var süre = args[2]
    if(!süre) return message.channel.send("Süre Belirtmelisin!")

    user.addRole(role.id)
    message.channel.send("BAŞARILI \n Kuyllanıcıya Rolü Verildi <a:tick:611540228397596681>")
    
    setTimeout(() => {
    
        user.removeRole(role.id)
        message.channel.send(user + " Süren Dolduğu İçin Rolünü Aldım <a:tick:611540228397596681>")

    }, ms(süre))
  
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['sürelirolver'],
    permLevel: 3,
    kategori: "Yetkili"
};
  
  exports.help = {
    name: 'sürelirol',
    description: 'Etiketlenen kullanıcıya etiketlenen rolü verir.',
    usage: 'tempRole <@kullanıcı> <@rol> <süre>'
};