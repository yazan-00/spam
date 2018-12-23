const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("526033450302701589")
setInterval(function() {
channel.send(`YAZAN PRO xD`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
