const Discord = require("discord.js");
const snekfetch = require("snekfetch");

module.exports.run = async (bot,message,args) => {


let {body} = await snekfetch
.get(`https://aws.random.cat/meow`);

let dogembed = new Discord.RichEmbed()
.setColor("#7289da")
.setTitle("Cat :cat:")
.setImage(body.file);

message.channel.send(dogembed);

}

 module.exports.help = {
   name: "cat"
 }
