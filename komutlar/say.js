const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {


    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  var msg = message;
  var üyesayisi = msg.guild.members.size.toString().replace(/ /g, "    ")
  var üs = üyesayisi.match(/([0-9])/g)
  üyesayisi = üyesayisi.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs) {
    üyesayisi = üyesayisi.replace(/([0-9])/g, d => {
      return {
  '0': `<a:sfr:708213363594756107>`,
    '1': `<a:bir:708213384763539516>`,
    '2': `<a:iki:708213390648147982>`,
    '3': `<a:uc:708213398122266624>`,
    '4': `<a:drt:708213398101295166>`,                       
    '5': `<a:bes:708213397874933801>`,
    '6': `<a:alti:708213398059352085>`,
    '7': `<a:yedi:708213398298689546>`,
    '8': `<a:sekiz:708213397791047681>`,
    '9': `<a:dokuz:708213398009282590>`}[d];
      })
    }/////////////////////////////
  var sessayi = count.toString().replace(/ /g, "    ")
  var üs2 = sessayi.match(/([0-9])/g)
  sessayi = sessayi.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs2) {
    sessayi = sessayi.replace(/([0-9])/g, d => {
      return {
  '0': `<a:sfr:708213363594756107>`,
    '1': `<a:bir:708213384763539516>`,
    '2': `<a:iki:708213390648147982>`,
    '3': `<a:uc:708213398122266624>`,
    '4': `<a:drt:708213398101295166>`,                       
    '5': `<a:bes:708213397874933801>`,
    '6': `<a:alti:708213398059352085>`,
    '7': `<a:yedi:708213398298689546>`,
    '8': `<a:sekiz:708213397791047681>`,
    '9': `<a:dokuz:708213398009282590>`}[d];
      })
    }
  
  /////////////////////////////////////////
    var bostbasansayi = message.guild.roles.get('BOOST ROL ID').members.size.toString().replace(/ /g, "    ")
  var üs2 = bostbasansayi.match(/([0-9])/g)
  bostbasansayi = bostbasansayi.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs2) {
    bostbasansayi = bostbasansayi.replace(/([0-9])/g, d => {
      return {
  '0': `<a:sifir:708213363594756107>`,
    '1': `<a:bir:708213384763539516>`,
    '2': `<a:iki:708213390648147982>`,
    '3': `<a:uc:708213398122266624>`,
    '4': `<a:drt:708213398101295166>`,                       
    '5': `<a:bes:708213397874933801>`,
    '6': `<a:alti:708213398059352085>`,
    '7': `<a:yedi:708213398298689546>`,
    '8': `<a:sekiz:708213397791047681>`,
    '9': `<a:dokuz:708213398009282590>`}[d];
      })
    }
  /////////////////////////////////////////
  var tagdakiler = 0;
  let tag = "TAGINIZI BURAYA";
  message.guild.members.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    }  
  })
  var tagdakilerr = tagdakiler.toString().replace(/ /g, "    ")
  var üs3 = tagdakilerr.match(/([0-9])/g)
  tagdakilerr = tagdakilerr.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs3) {
    tagdakilerr = tagdakilerr.replace(/([0-9])/g, d => {
      return {
  '0': `<a:sfr:708213363594756107>`,
    '1': `<a:bir:708213384763539516>`,
    '2': `<a:iki:708213390648147982>`,
    '3': `<a:uc:708213398122266624>`,
    '4': `<a:drt:708213398101295166>`,                       
    '5': `<a:bes:708213397874933801>`,
    '6': `<a:alti:708213398059352085>`,
    '7': `<a:yedi:708213398298689546>`,
    '8': `<a:sekiz:708213397791047681>`,
    '9': `<a:dokuz:708213398009282590>`}[d];
      })
    }
  //////////////////////////////////////////
  var onlayn = message.guild.members.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
  var üs4= onlayn.match(/([0-9])/g)
  onlayn = onlayn.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs4) {
    onlayn = onlayn.replace(/([0-9])/g, d => {
      return {
  '0': `<a:sfr:708213363594756107>`,
    '1': `<a:bir:708213384763539516>`,
    '2': `<a:iki:708213390648147982>`,
    '3': `<a:uc:708213398122266624>`,
    '4': `<a:drt:708213398101295166>`,                       
    '5': `<a:bes:708213397874933801>`,
    '6': `<a:alti:708213398059352085>`,
    '7': `<a:yedi:708213398298689546>`,
    '8': `<a:sekiz:708213397791047681>`,
    '9': `<a:dokuz:708213398009282590>`}[d];
      })
    }
  ///codare farkıyla bebeğim
let emoji1 = `<a:kalp:706431800540659723>`;
 const embed1 = new Discord.RichEmbed()
 .setColor('000000')
 .setAuthor('CODE')
 .setDescription(`${emoji1} **Sunucumuzda Toplam ** ${üyesayisi} **Üye bulunmakta.** \n\n ${emoji1} **Sunucumuzda Toplam** ${onlayn} **Çevrimiçi üye bulunmakta.** \n\n ${emoji1} **Ses kanallarında Toplam** ${sessayi} **Üye bulunmakta.** \n\n ${emoji1} **Tagımızda Toplam ** ${tagdakilerr} **Kişi bulunmakta.** \n\n ${emoji1} **Boost Basan Toplam ** ${bostbasansayi} **Kişi bulunmakta.**`)
 .setFooter(`Komutu Kullanan Yetkili: ${message.author.username}`)
 
     
 
  msg.channel.send(embed1);
  
  /*client.setInterval(() => {
  let channel = client.channels.get("694870726280347668"); 
  channel.setTopic(`Toplam üye: _${üyesayısı.toString()}_ / Çevrimiçi üye: ${onlayn}`); //kanal açıklama oto
}, 10000);*/
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
  name: 'say'
}