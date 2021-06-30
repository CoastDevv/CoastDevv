module.exports = {
    name: 'clear',
    description: 'Clears Messages',
    async execute(message, args){
        if(!args[0]) return message.reply("Missing the amount of messages to clear!");
        if(isNaN(args[0])) return message.reply("Please enter a valid number!");

        if(args[0] > 100) return message.reply("You cannot clear more than **100** messages at a time!");
        if(args[0] < 1) return message.reply("You must delete atleast **1** message!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        })

    }
}