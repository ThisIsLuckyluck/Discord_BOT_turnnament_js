const {
  Client,
  GatewayIntentBits,
  Collection,
  Events,
  ActivityType,
} = require("discord.js");
const { token} = require("./config.json");
const fs = require("fs");
const path = require("node:path");

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

client.commands = new Collection();

const foldersPath = path.join(__dirname, "./commands");
const commandFolders = fs.readdirSync(foldersPath);

const commands = [];

for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs.readdirSync(commandsPath).filter((file) => {
      return file.endsWith(".js");
    }
  )
  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);

    if ("data" in command && "execute" in command) {
      if ("menu" in command) {
        client.menus.set(command.menu.components, command.menu);
      }

      client.commands.set(command.data.name, command);
      commands.push(command.data);
    } 
  }
}

const rest = new Discord.REST().setToken(config.token);
    
      const guildID = "1179522668614135849"

      const data =  rest.put(
        Discord.Routes.applicationGuildCommands(config.clientId, guildID),
        { body: commands }
      );

module.exports = {
  client,
};

EventHandler(client);
CommandHandler(client);

client.login(token);