// NDc5OTY0NTYxNTIxNTA4MzYz.Dlg69Q.7gMhorvJPdwV_U_IU1GGEAqO124

const Discord = require('discord.js');
const client = new Discord.Client();

const prefixes = 'manubot';
const command_list = ['manual', 'help', 'busca', 'dame'];

var args="";
var command="";

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  
  var action = 'none';
  
  if (message.content.toLowerCase().includes('hola')) {
    action ='salute';
  } else {
    if (message.content.toLowerCase().includes(prefixes)) {
        action = 'other_order';
  }
  
  if (action === 'salute') message.channel.send('Hola ' + message.author.toString() + '!');
  if (action === 'other_order') message.channel.send(message.content);    

  });


//THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
