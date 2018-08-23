// NDc5OTY0NTYxNTIxNTA4MzYz.Dlg69Q.7gMhorvJPdwV_U_IU1GGEAqO124

const Discord = require('discord.js');
const client = new Discord.Client();

var prefixes = 'manubot';
var command_list = ['manual', 'help', 'busca', 'dame'];

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
  if (action === 'other_order') {
    args = message.content.slice(prefixes.length).trim().split(/ +/g);
    command = args.shift().toLowerCase();
    
    for (int i=0; i < command_list.length; i++) {
      if (command.includes(command_list[i])) {
        action = command;
        break;
      }
    }
  }
  
  if (action === 'manual') message.channel.send('Manual' + args);
  if (action === 'help') message.channel.send('Help' + args);
  if (action === 'busca') message.channel.send('Busca' + args);
  if (action === 'dame') message.channel.send('Dame' + args);

  });


//THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
