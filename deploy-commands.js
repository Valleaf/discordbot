const { SlashCommandBuilder, Routes } = require("discord.js");
const { REST } = require("@discordjs/rest");
const { clientId, guildId } = require("./config.json");
require("dotenv").config();

const commands = [
  new SlashCommandBuilder()
    .setName("dota")
    .setDescription("Ping pour dota")
    .addStringOption((option) =>
      option
        .setName("détails")
        .setDescription("Pour préciser à quelle heure par exemple")
        .setRequired(false)
    ),
  new SlashCommandBuilder()
    .setName("barre")
    .setDescription("Mettre une barre à quelqu'un")
    .addUserOption((option) =>
      option
        .setName("à")
        .setDescription("Pour préciser à qui")
        .setRequired(true)
    )
    .addNumberOption((option) =>
      option
        .setName("combien")
        .setDescription("Pour savoir combien de barre ajouter au compteur")
        .setRequired(true)
    ),
  new SlashCommandBuilder()
    .setName("hackzorz")
    .setDescription("h4ck3rm4n")
    .addStringOption((option) =>
      option
        .setName("qui")
        .setDescription("Indiquer qui vous souhaitez h4ckz0rz")
        .setRequired(true)
    ),
  new SlashCommandBuilder().setName("pipi").setDescription("xd"),
].map((command) => command.toJSON());

const rest = new REST({ version: "10" }).setToken(process.env.CLIENT_TOKEN);

rest
  .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then(() => console.log("Successfully registered application commands."))
  .catch(console.error);
