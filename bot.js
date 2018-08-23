// NDc5OTY0NTYxNTIxNTA4MzYz.Dlg69Q.7gMhorvJPdwV_U_IU1GGEAqO124

const Discord = require('discord.js');
const client = new Discord.Client();

var prefixes = 'manubot';
var commands = ['manual', 'help', 'busca', 'dame'];

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  
  var action = 'none';
  
  if (message.content.toLowerCase().includes('hola')) {
    action ='salute';
  } else {
    if (message.content.toLowerCase().includes(prefixes)) {
        action = 'order';
  }
  
  //checkeo de prefijo
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  if (message.content === 'hola') {
      message.channel.send("Hello " + message.author.toString() + ", and welcome!");
    }
});


//THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
