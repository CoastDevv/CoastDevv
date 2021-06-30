module.exports = {
    name: 'kick',
    description: 'Kicks a user',
    execute(messages, args) {

        const member = messages.mentions.users.first();

        if(member){
            const memberTarget = messages.guild.members.cache.get(member.id);
            memberTarget.kick();
            messages.reply(`<@${memberTarget.user.id}> has been kicked!`);
            
        } else{
            messages.reply("Invalid Member");
        }
    }
}