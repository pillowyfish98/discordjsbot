# Discord JavaScript Bot Setup

## download the index.js file to setup the bot and replace "YOUR TOKEN HERE" with the token of the bot

- To learn how to make a [discord bot](https://www.discordbotsetup.tk/) at
- make sure you have [node.js](https://nodejs.org/en/) installed
- in the directory that the [index.js](index.js) file is in after [node.js](https://nodejs.org/en/) is installed paste `npm install discord.js`


you can use 
```
client.on("message", msg => {
  if (msg.content === '!help') {
    msg.reply('YOUR MESSAGE HERE');
  }
});
```
to ping a reply

<p align="center">
  <img alt="Ping reply" src="https://i.imgur.com/VorQaih.png">
</p>

or
you can use 
```
client.on("message", msg => {
  if (msg.content === '!help') {
    msg.channel.send('YOUR MESSAGE HERE');
  }
});
```
to send a message in that channel

<p align="center">
  <img alt="reply" src="https://i.imgur.com/68oPmiC.png">
</p>


