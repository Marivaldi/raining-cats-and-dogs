require('dotenv').config();
const Discord = require('discord.js');
const cat_request = require('./requests/cat');
const dog_request = require('./requests/dog');
const weather_request = require('./requests/weather');
const client = new Discord.Client();
const choices = ['cat', 'dog', 'weather'];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if (msg.content.indexOf('RC&D') === 0) {

    if (msg.content.indexOf('-help') > 4) {
      msg.channel.send('Raining Cats & Dogs returns weather, cats, or dogs.');
      return;
    }

    if (msg.content.indexOf('-cat') > 4) {
      cat_request(msg.channel);
      return;
    }

    const which = (Math.floor(Math.random() * Math.floor(3)))
    switch(choices[which]){
      case 'cat':
        cat_request(msg.channel);
        break;
      case 'dog':
        dog_request(msg.channel);
        break;
      case 'weather':
        weather_request(msg.channel);
        break;
    }
  }
})

client.login(process.env.DISCORD_BOT_KEY);