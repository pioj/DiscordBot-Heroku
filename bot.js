// NDc5OTY0NTYxNTIxNTA4MzYz.Dlg69Q.7gMhorvJPdwV_U_IU1GGEAqO124

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  
  var action = 'null';
  
  if (message.content.toLowerCase().includes('hola')) action ='salute';
  if (message.content.toLowerCase().includes('manubot')) action = 'other_order';
    
  if (action === 'salute') message.channel.send('Hola ' + message.author.toString() + '!');
  if (action === 'other_order') message.channel.send(message.content);

  console.log('last action: ' +message.content);
});


//THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
