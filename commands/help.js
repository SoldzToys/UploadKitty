const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let helpEmbed = new Discord.RichEmbed()
.setDescription("Help Bar")
.setColor("#99aab5")
.addField("Member Commands", "cat");

message.channel.send(helpEmbed);

if(message.member.hasPermission("MANAGE_MESSAGES")){
let modEmbed = new Discord.RichEmbed()
.setDescription("Mod Help Bar")
.setColor("#99aab5")
.addField("Mod Commands", "clear");

try{
  await message.author.send(modEmbed);
  message.react("🐱");
}catch(e){
  message.reply("Meow, DMs locked!")
 }
}


}

  module.exports.help = {
    name: "help"
}
