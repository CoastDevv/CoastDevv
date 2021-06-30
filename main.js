const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);

}

client.once('ready', () => {

    console.log('Coast Is Active!')

});

client.on('message', message =>{

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();



    
     if (command == 'help'){

        client.commands.get('help').execute(message, args, Discord);

    } else if (command == 'discord'){

        client.commands.get('discord').execute(message, args, Discord);
    } else if (command == 'clear'){
        client.commands.get('clear').execute(message, args);

    } else if (command == 'commands'){
        client.commands.get('commands').execute(message, args, Discord);
    } else if (command == 'kick'){
        client.commands.get('kick').execute(message, args);

    } else if (command == 'ban'){
        client.commands.get('ban').execute(message, args);

    } else if (command == 'admincommands'){
        client.commands.get('admincommands').execute(message, args, Discord);
    } else if (command == 'mute'){
        client.commands.get('mute').execute(message, args);
    } else if (command == 'unmute'){
        client.commands.get('unmute').execute(message, args);
    }
});















client.login('ODU5MTI5NzA2NDA5ODg1NzAz.YNoM4w.UPybikgJCbwJ-_5I-G5I9f8b6Mo');


