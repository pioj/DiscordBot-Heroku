// NDc5OTY0NTYxNTIxNTA4MzYz.Dlg69Q.7gMhorvJPdwV_U_IU1GGEAqO124

const Discord = require('discord.js');
const snekfetch = require('snekfetch');

const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});
 /*
client.on('message', message => {
  
  var action = 'null';
  
  if(!message.author.bot) { //si no lo lee de un bot...
    if (message.content.toLowerCase().includes('hola')) action ='salute';
    if (message.content.toLowerCase().includes('manubot')) action = 'other_order';
    
    if (action === 'salute') message.channel.send('Hola ' + message.author.toString() + '!');
    if (action === 'other_order') {
      const target ='manubot';
      const args = message.content.slice(target.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      
      if (command ==='help') message.channel.send('Help: ' + args);
      if (command ==='dame') message.channel.send('Dame: ' + args);
      
      //buscador de cosas por internet
      if (command ==='busca') message.channel.send('Busca: ' + 'https://lmgtfy.com/?q=' + args);
      
      //manual de Unity
      if (command ==='manual') message.channel.send('Manual: ' + 'https://docs.unity3d.com/ScriptReference/' + args + '.html');
      
      //dame es para sacar datos del API REST de UnitySpain
      if (command ==='dame') {
        //aqui va algo
      }
      
    }
  
  }
  console.log('last action: ' + message.content);
});
*/

//THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
