const Discord = require('discord.js');
const keep_alive = require('./keep_alive.js');
const token = process.env.TOKEN;
const mysql = require('mysql');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
  console.log('Ready');
});
//message.member.setNickname (message.member.nickname + 'God');
var all = [];
console.log(all);



client.on('message', message => {
  let roleName = 'Exun G0d';
  let role = message.guild.roles.find(x => x.name == roleName);
  if (!role) {
    message.guild.createRole({
      name: 'Exun G0d',
      color: 'BLUE',
    })
      .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
      .catch(console.error)
  }
  else {
    console.log('Already exists')
  }

  var point = message.content.split(" ")[1];

  if (message.content.startsWith('ent')) {

    let k = 0;

    if (point >= 100) {
      message.channel.send('Too much Bro try again')
    }
    else if (point % 1 != 0) {
      message.channel.send('Write whole numbers you bis')
    }
    else if (point > 10) {
      all.push(point)
      for (let i = 1; i < all.length; i++) {
        if (all[i] > point) {
          message.channel.send(all[i] + ">" + point)
          k = 0;
          break
        }
        if (point > all[i]) {
          k = 1;
        }

      }
      if (k == 1) {
        message.channel.send('Highest .. You are Exun G0d');

        message.guild.roles.find(role => role.name === 'Exun G0d').delete();
        let roleName = 'Exun G0d';
        let role = message.guild.roles.find(x => x.name == roleName);
          message.guild.createRole({
            name: 'Exun G0d',
            color: 'BLUE',
          })
        message.member.addRole(role);
      }
    }
    else {
      message.channel.send('Less than 10 buddy f')
    }
  }
});

// login to Discord with your app's token
client.login(token);