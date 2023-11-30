const Discord = require("discord.js");

module.exports = {
    name: Discord.Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`${client.user.tag} ready`)
        client.user.setActivity('Coucou', { type: Discord.ActivityType.Playing})
    },
};