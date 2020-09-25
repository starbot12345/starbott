const request = require("request");
const Discord = require("discord.js");
var status;
var avatar;



exports.run = (client, message, args) => {
 if(message.author.id !== "549203468414615562") if(message.author.id !== "621350244839456798") if(message.author.id !== "629982892357058572") if(message.author.id !== "490117807997190144") return message.channel.send(":no_entry_sign: **Gerekli yetkin yok bu komutu kullanamazsın!**")
  
  let name = args.join(" ");
    request(
        `http://api.roblox.com/users/get-by-username?username=${name}`,
        (err, res, data) => {
            let objusers = JSON.parse(data);
            let status;

            if (objusers.Id === undefined) {
                return message.channel.send("Böyle bir kullanıcı bulunamadı");
            } else {
                let avatar =
                    "https://www.roblox.com/Thumbs/Avatar.ashx?x=420&y=420&username=" +
                    name;
                let avatarMin =
                    "https://www.roblox.com/Thumbs/Avatar.ashx?x=100&y=100&username=" +
                    name;

                if (objusers.IsOnline) {
                    status = "Evet";
                } else {
                    status = "Hayır";
                }

                request(
                    `https://www.roblox.com/friends/json?userId=${objusers.Id}&currentPage=0&pageSize=20&imgWidth=110&imgHeight=110&imgFormat=jpeg&friendsType=BestFriends`,
                    (err, res, body) => {
                        let objfriends = JSON.parse(body);
                        const listFriends = objfriends.Friends;
                        let listAllFriends = listFriends.map(l => l.Username);

                        request(
                            `https://www.roblox.com/badges/roblox?userId=${objusers.Id}&imgWidth=110&imgHeight=110&imgFormat=png`,
                            (err, res, body) => {
                                let objbadges = JSON.parse(body);
                                const listbadges = objbadges.RobloxBadges;
                                let listAllBadges = listbadges.map(l => l.Name);

                                request(
                                    `http://api.roblox.com/users/${objusers.Id}/groups`,
                                    function (error, response, body) {
                                        let objgroups = JSON.parse(body);
                                        let listALLgroupName = objgroups.map(l => l.Name);
                                        const embed = new Discord.RichEmbed()
                                            .setTitle(`${name} kullanıcının bilgileri`)
                                            .setThumbnail(avatar)
                                            .addField("Aktif mi?", status, true)
                                            .addField("ID", objusers.Id)
                                            .addField("Arkadaşlar", listAllFriends, true)
                                        message.channel.send(embed);
                                    }
                                );
                            }
                        );
                    }
                );
            }
        }
    );
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["robloxbilgi"],
    permLevel: 0
};

exports.help = {
    name: "roblox",
    description: "Roblox hesabı hakkında bilgi verir",
    usage: "roblox"
};