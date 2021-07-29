const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log('I am ready!');
});

 //status
client.once('ready', () => { client.user.setActivity('!help', { type: "PLAYING" }); });
//({ ws: { properties: { $browser: "Discord iOS" }} });
// remove the // at the start of the text above to have mobile status on the bot

  
//ping reply
client.on("message", msg => {
  if (msg.content === '!help') {
    msg.reply('YOUR MESSAGE HERE');
  }
});

//message reply
client.on("message", msg => {
  if (msg.content === '!help') {
    msg.channel.send('YOUR MESSAGE HERE');
  }
});


client.login('YOUR TOKEN');
