module.exports = {
    name: Events.InteractionCreate,
    once: false,
    execute: async (interaction, client) => {
  const command = client.commands.get(interaction.commandName);
  
      if (
        interaction.isChatInputCommand() &&
        interaction.commandName == command.data.name
      ) {
        try {
          command.execute(client, interaction);
        } catch (e) {
          console.error(e);
        }
    }
}
}