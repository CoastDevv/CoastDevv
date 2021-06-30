module.exports = {
    name: 'admincommands',
    description: 'Current Administrative Commands',
    execute(message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FF7F00')
        .setTitle('Admin Commands')
        .addFields(
            {name: '\u200b', value:':pick: **kick | Kicks the user mentioned!**'},
            {name: '\u200b', value:':hammer: **ban | Bans the user mentioned!**'},
            {name: '\u200b', value:':newspaper2: **mute | Mutes the user mentioned!**'},
            {name: '\u200b', value:':newspaper2: **unmute | Unmutes the user mentioned!**'},
            {name: '\u200b', value: ':wrench: **clear | Clears the past X amount of messages!**'},
        )
        
        
        message.channel.send(newEmbed);
    }
    
}