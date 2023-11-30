const {
    Client,
    GatewayIntentBits,
    Collection,
    Events,
    ActivityType,
  } = require("discord.js");
  const { token} = require("./config.json");
  
  const CommandHandler = require("./handlers/CommandHandler.js");
  const EventHandler = require("./handlers/EventHandler.js");
  
  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildPresences,
    ],
  });
  
  
  module.exports = {
    client,
  };
  EventHandler(client);
  CommandHandler(client);
  
  client.login(token);