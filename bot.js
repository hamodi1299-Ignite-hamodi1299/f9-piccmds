const Discord = require('discord.js');
const client = new Discord.Client();
const jimp = require("jimp");// npm i jimp
const package = ('package.json');
const yt = require('ytdl-core');
const prefix = ("*")
const child_process = require("child_process");
const ownerid = ('474730486787211265')
const fs = require('fs')
const moment = require("moment");
const db = require('quick.db');

console.log("Iginte");

client.on('ready', () => {//source
    console.log('╔[════════════════════════════════════]╗');
    console.log('')
    console.log('            ╔[════════════]╗')
    console.log('              Bot Is Online')
    console.log('            ╚[════════════]╝')
    console.log('')
    console.log(`Logged in as ${client.user.tag}!`);
    console.log('')
    console.log(`servers! [ " ${client.guilds.size} " ]`);
    console.log('')
    console.log(`Users! [ " ${client.users.size} " ]`);
    console.log('')
    console.log('╚[════════════════════════════════════]╝')
  });
client.on('message', message => {//av mension
    if (message.content.startsWith(prefix + "avatar")) {

        var mentionned = message.mentions.users.first();
    var king66s;
      if(mentionned){
          var king66s = mentionned;
      } else {
          var king66s = message.author;

      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setAuthor(message.author.username, message.author.avatarURL)
        .setImage(`${king66s.avatarURL}`)
      message.channel.sendEmbed(embed);

    }
  });

    client.on("message", message => {    //serv-av
        if(!message.channel.guild) return;
 if(message.author.bot) return;
    if(message.content === prefix + "image"){
        const embed = new Discord.RichEmbed()

    .setTitle(`صورة سيرفر : ** ${message.guild.name} **`)
.setAuthor(message.author.username, message.guild.iconrURL)
  .setColor('RANDOM')
  .setImage(message.guild.iconURL)

 message.channel.send({embed});
    }
});

client.on('message', message => { //ping
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + 'ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms 📶 ")
.addField('**WebSocket:**',api + " ms 📶 ")
message.channel.send({embed:embed});
}
});

client.on("message", message => {
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "mcskin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send(`

        __**الاستعمل الصحيح :ok_hand:**__

  ❖**mcskin <user> ** ==>**لاظهار سكن اي شخص في ماينكرافت**
  **الرجاء كتابة اسم شخص لعرض سكنه**

  `);
        const image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, "skin.png");
    message.channel.send(image)
        }
    });
  
client.login(process.env.BOT_TOKEN);
