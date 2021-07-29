# Discord JavaScript Bot Setup

To learn how to make a [discord bot](https://sites.google.com/view/discordbotsetup/)

copy and paste the code from index.js

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

make sure you have [node.js](https://nodejs.org/en/) installed

