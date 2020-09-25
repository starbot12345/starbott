const Discord = require('discord.js');
const embed = new Discord.RichEmbed()
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const db = require('quick.db')
const moment = require('moment');
const Jimp = require('jimp');
require('./util/eventLoader')(client);
let linkEngel = JSON.parse(fs.readFileSync("./jsonlar/reklamEngelle.json", "utf8"));

const express = require('express')
const http = require('http')
const app = express()

/* app.get("/", (request, response) => {
  response.sendStatus(200);
});
*/

const tada = (client.emojis.get("611205433998311445"))

require("./modules/functions.js")(client);
client.on("ready", async () => {
  require("./modules/dashboard")(client); 
  client.appInfo = await client.fetchApplication();
	setInterval( async () => {
		client.appInfo = await client.fetchApplication();
	}, 60000);
})

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 10000);

var prefix = ayarlar.prefix;
let owner = "549203468414615562";

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

process.setMaxListeners(0);
require('events').EventEmitter.defaultMaxListeners = 0

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.queue = new Map()

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

//BU KISIMLARA BOT.JS EKLENMESİ GEREKEN ŞEYLER KOY, BUNDAN SONRA KOMUTLARI komutlar/komutadı.js ŞEKLİNDE NEW FİLE AÇIP KOY

//BU KISIMLARA BOT.JS EKLENMESİ GEREKEN ŞEYLER KOY, BUNDAN SONRA KOMUTLARI komutlar/komutadı.js ŞEKLİNDE NEW FİLE AÇIP KOY


//BU KISIMLARA BOT.JS EKLENMESİ GEREKEN ŞEYLER KOY, BUNDAN SONRA KOMUTLARI komutlar/komutadı.js ŞEKLİNDE NEW FİLE AÇIP KOY

client.on("roleCreate", async (rolee, member, guild) => {
  let rolkoruma = await db.fetch(`rolk_${rolee.guild.id}`);
  if (rolkoruma == "acik") {
    rolee.delete();
    const embed = new Discord.RichEmbed()
      .setDescription(
        "Sunucunuzda yeni bir rol oluşturuludu! fakat geri silindi! (Rol Koruma Sistemi)" //istediğiniz yazı
      )
      .setColor("BLACK");
    rolee.guild.owner.send(embed);
    return;
  } else {
    return;
  }
});

client.on('ready', msg => {
  let knl1 = client.channels.get('745264548080254992')
  let knl2 = client.channels.get('745264548080254993')
  let knl3 = client.channels.get('745264548080254994')
  let knl4 = client.channels.get('745264548080254995')
  let knl5 = client.channels.get('745264548491034686')
  setInterval(() => {
  knl1.setName('⭐ STAR BOT ⭐', 'voice');
  knl2.setName(client.guilds.size + ' Sunucu', 'voice');
  knl3.setName(client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ' Kullanıcı', 'voice');
  knl4.setName(client.channels.size + ' Kanallar', 'voice');
  knl5.setName(Math.ceil(client.ping) + ' Ping', 'voice');


  },1 * 10000);
}); 
;


client.on("message", message => {
    if (message.channel.type === "dm") {
        if (message.author.bot) return;
        const dm = new Discord.RichEmbed()
         .setTitle(`${client.user.username} - Dm Mesaj`)
         .setColor('RANDOM')
         .addField(`Mesajı Gönderen`, message.author.tag)
         .addField(`ID'si`, message.author.id)
         .addField(`Gönderilen Mesaj`, message.content)
         .setThumbnail(message.author.avatarURL) 
    client.channels.get("755364645392613496").send(dm);
    }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '<@!597503792585637888> saane karşim') {
    msg.reply('O zman sb!ban ehehheh');
  }
});


  


client.on('message', msg => {
  if (msg.content.toLowerCase() === '<@!597503792585637888> çok konuştum dimi') {
    msg.reply('**Evet , çok konuştun çenesi düşük** :unamused:');
  }
});

client.on("guildMemberAdd", async member => {
        let sayac = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
  let otorole =  JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
      let arole = otorole[member.guild.id].sayi
  let giriscikis = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
  let embed = new Discord.RichEmbed()
    .setTitle('Otorol Sistemi')
    .setDescription(`<a:1_:716296011517263872><a:2_:716296055120986213>**Hoşgeldin! \`${member.user.tag}\` adlı kullanıcı sunucuya katıldı! \`${member.guild.roles.get(arole).name}\` Rolü Verildi.**<a:verifb:749194089483862016>`)
.setColor("GREEN")
    .setFooter("STAR BOT", client.user.avatarURL);

  if (!giriscikis[member.guild.id].kanal) {
    return;
  }

  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(embed);
    member.addRole(arole)
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }

});

client.on("guildMemberAdd", async (member) => {
      let autorole =  JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
      let role = autorole[member.guild.id].sayi

      member.addRole('Üye')
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token); 



client.on('guildDelete', guild => {

let rrrsembed = new Discord.RichEmbed()

.setColor("RED")
.setTitle(` Bot Kickledi <a:erensicikis:568810188207816725> `)
.addField(":pencil2: | Sunucu Adı:", guild.name)
.addField("Sunucu'nun ID'si", guild.id)
.addField(":key: | Sunucu sahibi", guild.owner)
.addField(":id: | Sunucu Sahibi'nin ID'si", guild.ownerID)
.addField(":white_large_square: | Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField(":straight_ruler: | Sunucudaki Kişi Sayısı:", guild.memberCount)

   client.channels.get('754645745788780544').send(rrrsembed);
  
});




client.on('guildCreate', guild => {

let rrrsembed = new Discord.RichEmbed()

.setColor("GREEN")
.setTitle(` Bot Eklendi <a:erensigiris:568810300409905153> `)
.addField(":pencil2: | Sunucu Adı:", guild.name)
.addField("Sunucu'nun ID'si", guild.id)
.addField(":key: | Sunucu Sahibi", guild.owner)
.addField(":id: | Sunucu Sahibi'nin ID'si", guild.ownerID)
.addField(":white_large_square: | Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField(":straight_ruler: | Sunucudaki Kişi Sayısı:", guild.memberCount)

   client.channels.get('754645745788780544').send(rrrsembed);
  
});

client.on("message", async msg => {
  let saas = await db.fetch(`saas_${msg.guild.id}`);
  if (saas == 'kapali') return;
  if (saas == 'acik') {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm Selam Hoşgeldin');
  }
  }
});

client.on('message', async message => {
  const ms = require('ms');
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "sunucukur") {
  if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" Bot Paneli Zaten Ayarlanmış.")
  message.channel.send(`Bot Bilgi Kanallarının kurulumu başlatılsın mı? başlatılacak ise **evet** yazınız.`)
      if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Bu Kodu `Yönetici` Yetkisi Olan Kişi Kullanabilir.");
      message.channel.awaitMessages(response => response.content === 'evet', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
   message.guild.channels.map(m => m.delete())
    message.guild.roles.map(z => z.delete())
     message.guild.category.map(x => x.delete())
    .then((collected) => {
   message.guild.createChannel('|▬▬|ÖNEMLİ KANALLAR|▬▬|', 'category', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])



        
 message.guild.createChannel('「📃」kurallar', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
 message.guild.createChannel('「🚪」gelen-giden', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
.then(channel =>
       channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
       message.guild.createChannel('「✅」sayaç', 'text', [{
        id: message.guild.id,
        deny: ['SEND_MESSAGES']
      }])
.then(channel =>
             channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
             message.guild.createChannel('「💾」log-kanalı', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
            .then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
            message.guild.createChannel('「📢」duyuru-odası', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));

       }) 
       .then((collected) => {
        message.guild.createChannel('|▬▬|GENEL KANALLAR|▬▬|', 'category', [{
       id: message.guild.id,
     }]);
             
      message.guild.createChannel(`「💡」şikayet-ve-öneri`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
     message.guild.createChannel(`「👥」pre-arama-odası`, 'text')
     .then(channel =>
            channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
     message.guild.createChannel(`「📷」görsel-içerik`, 'text')
     .then(channel =>
                  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
     message.guild.createChannel(`「🤖」bot-komutları`, 'text')
     .then(channel =>
                  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
     message.guild.createChannel(`「💬」sohbet`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));

      message.guild.createChannel(`🏆》Kurucu Odası`, "voice")
      .then(channel =>
        channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|SES KANALLARI|▬▬|")))
      .then(c => {
        let role = message.guild.roles.find("name", "@everyone");
        let role2 = message.guild.roles.find("name", "Kurucu");
        
        c.overwritePermissions(role, {
            CONNECT: false,
        });
        c.overwritePermissions(role2, {
            CONNECT: true,
            
        });
    })

    message.guild.createChannel('|▬▬|SES KANALLARI|▬▬|', 'category', [{
      id: message.guild.id,
    }]);

    message.guild.createChannel(`🏆》Yönetici Odası`, "voice")
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|SES KANALLARI|▬▬|")))
    .then(c => {
      let role = message.guild.roles.find("name", "@everyone");
      let role2 = message.guild.roles.find("name", "Kurucu");
      let role3 = message.guild.roles.find("name", "Yönetici");
      c.overwritePermissions(role, {
          CONNECT: false,
      });
      c.overwritePermissions(role2, {
          CONNECT: true,
      });
      c.overwritePermissions(role3, {
          CONNECT: true,
      });
  })

  message.guild.createChannel(`💬》Sohbet Odası`, "voice")
  .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|SES KANALLARI|▬▬|")))
  .then(c => {
    let role = message.guild.roles.find("name", "@everyone");
    c.overwritePermissions(role, {
        CONNECT: true,
    });
})

message.guild.createChannel('|▬▬|OYUN ODALARI|▬▬|', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`🎮》LOL`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
 message.guild.createChannel(`🎮》ZULA`, 'voice')
 .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
 message.guild.createChannel(`🎮》COUNTER STRİKE`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
 message.guild.createChannel(`🎮》PUBG`, 'voice')
 .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
  message.guild.createChannel(`🎮》FORTNİTE`, 'voice')
  .then(channel =>
   channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
   message.guild.createChannel(`🎮》MİNECRAFT`, 'voice')
   .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
    message.guild.createChannel(`🎮》ROBLOX`, 'voice')
    .then(channel =>
     channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
     message.guild.createChannel(`🎮》WOLFTEAM`, 'voice')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))



      message.guild.createRole({
        name: 'Kurucu',
        color: 'RED',
        permissions: [
            "ADMINISTRATOR",
    ]
      })

      
      message.guild.createRole({
        name: 'Yönetici',
        color: 'BLUE',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
    ]
      })

      message.guild.createRole({
        name: 'Moderatör',
        color: 'GREEN',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES"
    ]
      })

      message.guild.createRole({
        name: 'V.I.P',
        color: '00ffff',
      })

      message.guild.createRole({
        name: 'Üye',
        color: 'WHITE',
      })

      message.guild.createRole({
        name: 'Bot',
        color: 'ORANGE',
      })
  
        message.channel.send("**Tüm Odalar Başarıyla Kuruldu**✅")
            })   
    
}
});

client.on('message', msg => {
  if (msg.content === 'sb!davet') {
    msg.reply("**Beni Bu Davet Linkinden Davet Edebilirsin:** https://discordapp.com/oauth2/authorize?client_id=597503792585637888&scope=bot&permissions=805829694");
  }
});


client.on('message', msg => {
  if (msg.content.startsWith(prefix + "şikayet")) {//sunucu kurucusuna yazdığınız mesajı gönderir.
    msg.reply("Şikayetiniz Bildirilmiştir")
    let mesaj = msg.content.substring(2 + 3);
    msg.delete();
    msg.guild.owner.send(`Şikayet Bildiren: **${msg.author.tag}** \n Şikayet: ` + mesaj);
    }
    });



client.on('message', message => {
  
  let embded = new Discord.RichEmbed()
    .setColor(303136)
  .setDescription(`<a:yldz:713469267302940674>**Prefixim**<a:sagok:755393400467095602> **sb!** ve <@597503792585637888> \n<a:hareketli:756117639411007499>**Komutlarma ulaşmak için**<a:sagok:755393400467095602> **sb!yardım**`)
  .setFooter("STAR BOT", client.user.avatarURL)

if (message.content === `<@!597503792585637888>`) {
message.channel.send(embded)
}
});


          
let Embed = new Discord.RichEmbed()
let capsEngel = JSON.parse(fs.readFileSync("./jsonlar/capslockEngelle.json", "utf8"));
client.on("message", msg => {
  if (!msg.guild) return;
  if (!capsEngel[msg.guild.id]) return;
  if (capsEngel[msg.guild.id].capsEngel === 'kapali') return;
    if (capsEngel[msg.guild.id].capsEngel=== 'acik') {
  const kufur = ["A", "B", "C", "D", "E", "Q", "W", "R", "T", "Y", "U", "I", "O", "P", "Ğ", "Ü", "S", "F", "G", "H", "J", "K", "L", "Ş", "İ", "Z", "X", "V", "N", "M", "Ö", "Ç"];  if (kufur.some(word => msg.content.toLowerCase().includes(word)) ) {
    if (!msg.member.hasPermission("ADMINISTRATOR")) {
      msg.delete()
      .setAuthor("Bu sunucuda CapsLock ile yazılan mesajlar engellenmektedir! CapsLock ile mesaj yazmana izin vermeyeceğim!")
      msg.channel.send(embed);
      msg.then(message => message.delete(3000));
    }
}
    };
});

client.on("message", msg => { 
if (!linkEngel[msg.guild.id]) return;
if (linkEngel[msg.guild.id].linkEngel === "kapali") return;
    if (linkEngel[msg.guild.id].linkEngel === "acik") {
    var regex = new RegExp(/(discord.gg|http|.gg|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/)
    if (regex.test(msg.content)== true) {
    if (!msg.member.hasPermission("ADMINISTRATOR")) {
      msg.delete()
       msg.channel.send(`<@${msg.author.id}>`).then(message => message.delete(5000));
        var e = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Link Engeli!")
        .setDescription(`Bu sunucuda linkler **${client.user.username}** tarafından engellenmektedir! Link atmana izin vermeyeceğim!`)
        msg.channel.send(e).then(message => message.delete(5000));
    }
}
    }
});
 
/*client.on('guildMemberAdd',async member => {
  let user = client.users.get(member.id);
  let chan = client.channels.get(db.fetch(`guvenlik${member.guild.id}`)) 
       const Canvas = require('canvas')
       const canvas = Canvas.createCanvas(360,100);
       const ctx = canvas.getContext('2d');
  
  const resim1 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/591299755976425493/614151181752860672/yhosgeldirrn.png')
    const resim2 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/591299755976425493/614164419768877056/yhosgeldirrn.png')
    const kurulus = new Date().getTime() - user.createdAt.getTime();
    const gün = moment.duration(kurulus).format("D")   
    var kontrol;
      if (kurulus > 2629800000) kontrol = resim2
    if (kurulus < 2629800000) kontrol = resim1

       const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/591299755976425493/614164413318168606/Adsz.png');
       ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
   


  const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
  ctx.drawImage(kontrol,0,0,canvas.width, canvas.height)
  ctx.beginPath();
    ctx.lineWidth = 4;
  ctx.fill()
    ctx.lineWidth = 4;
  ctx.arc(180, 46, 36, 0, 2 * Math.PI);
    ctx.clip();
  ctx.drawImage(avatar, 143,10, 73, 72  );

   
       const attachment = new Discord.Attachment(canvas.toBuffer(), 'sb-güvenlik.png');
    chan.send(attachment)
});*/

const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5NzUwMzc5MjU4NTYzNzg4OCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTY1ODc1NTE0fQ.NCv9qZVJXZ2gJ_IQU4E2JQ71BIeFN8gI9XqE9c207VM', client);

// Optional events
dbl.on('posted', () => {
  console.log('Server count posted!');
})

dbl.on('error', e => {
 console.log(`Oops! ${e}`);
});






client.on('message', msg => {
  if (msg.content.startsWith(prefix + "sikayet")) {//sunucu kurucusuna yazdığınız mesajı gönderir.
    msg.reply("Şikayetiniz Bildirilmiştir")
    let mesaj = msg.content.substring(2 + 3);
    msg.delete();
    msg.guild.owner.send(`Şikayet Bildiren: **${msg.author.tag}** \n Şikayet: ` + mesaj);
    }
    });

client.on("message", message => {
if (message.content.toLowerCase() === prefix + "avatarım") {
message.channel.sendEmbed(new Discord.RichEmbed()
.setDescription(`Avatarınız:`)
.setImage(`${message.author.avatarURL} `)
.setColor("RANDOM"));
   }
});

client.on('guildCreate', async (guild) => {
if (!guild) return
let hata = false;
try {
var kanal = await guild.createChannel('star-bot','text');
} catch(e){
hata = true;
}
if (!hata){kanal.send(`bruh`)}//editle.
else  {
await guild.channels.random().send('sea beyler permsiz eklemişsiniz beni hayırdır?')//qweojwhoe
}
});


 client.login(ayarlar.token)