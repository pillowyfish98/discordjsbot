const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log('I am ready!');
});

 //status
client.once('ready', () => { client.user.setActivity('!help', { type: "PLAYING" }); });
  
//command
client.on("message", msg => {
  if (msg.content === '!help') {
    msg.reply('YOUR MESSAGE HERE');
  }
});


client.login('YOUR TOKEN');
