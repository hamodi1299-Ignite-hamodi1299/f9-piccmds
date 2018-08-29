const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready',  () => {
  console.log('By : hamodi#1151 ');
  console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  console.log(`F9 bot is online now with aut any problem`);
});

client.on('message', message => {
    if (message.content.startsWith("*avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

   client.on("message", message => {
    const prefix = "*"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });
  
  client.on('message', message => {
  const port = '25565'
  if(message.content.startsWith('*mcstats')) {
 const args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.channel.send("** يجب كتابة ايدي السيرفر . **");
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(`https://api.minetools.eu/favicon/${args}/25565`)
        .addField("📜 اسم السيرفر",`${args}`,true)
        .addField("🌐 بورت السيرفر",`${port}`)
        .setImage(`http://status.mclive.eu/${args}/${args}/25565/banner.png`)
        .setFooter(`F9 Bot.`)
                .setTimestamp()
    message.channel.send(embed)      
}})

client.on('message', message => {
    if (message.content.startsWith("*info")) {
      message.channel.send({
 embed: new Discord.RichEmbed() 
    .setColor("#38a481")
    .addField('**الذاكرة المستخدمة 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
         .addField('**سرعة الاتصال📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
        .addField('**استخدام المعالج💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
     })
    }
  });
  
client.login(process.env.BOT_TOKEN);
