module.exports = {
    name: 'ban',
    description: 'Bans a user',
    execute(messages, args) {

        const member = messages.mentions.users.first();

        if(member){
            const memberTarget = messages.guild.members.cache.get(member.id);
            memberTarget.ban();
            messages.reply(`<@${memberTarget.user.id}> has been banned!`);
            
        }else{
            messages.reply("Invalid Member");
        }
    }
}