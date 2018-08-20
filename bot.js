// NDc5OTY0NTYxNTIxNTA4MzYz.Dlg69Q.7gMhorvJPdwV_U_IU1GGEAqO124

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'hola') {
      message.channel.send("Hello " + message.author.toString() + ", and welcome!");
    }
});

//THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
