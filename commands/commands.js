module.exports = {
    name: 'commands',
    description: 'Current Available Commands Shown',
    execute(message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FF7F00')
        .setTitle('Available Commands')
        
        .addFields(
            {name: '\u200b', value:':hammer_pick: clear'},
            {name: '\u200b', value:':question: help'},
            {name: '\u200b', value:':page_facing_up: commands'},
            {name: '\u200b', value:':trophy: discord'}
        
        )
        
        
        message.channel.send(newEmbed);
    }
    
}