module.exports = {
    name: 'help',
    description: 'Help CMD',
    execute(message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FF7F00')
        .setTitle('Coast Assistance')
        .setURL('https://discord.gg/NRrd4kxS')
        
        .addFields(
            {name: '\u200b', value:':white_check_mark: **Prefix (-)**'},
            {name: '\u200b', value:':tools: **admincommands | Lets you see the current administrator commands!**'},
            {name: '\u200b', value:':page_facing_up: **For more assistance, join our discord using -discord**'},
        
        )
        
        
        message.channel.send(newEmbed);
    }
    
}