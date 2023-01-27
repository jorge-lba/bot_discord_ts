import { GatewayIntentBits, Partials } from "discord.js";

const discordConfig = Object.freeze({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.DirectMessageTyping
  ],
  partials: [
    Partials.Message,
    Partials.Channel,
    Partials.GuildScheduledEvent,
    Partials.GuildMember,
    Partials.User
  ],
})

export { discordConfig }