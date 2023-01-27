import { Client } from 'discord.js';
import { helpCommand } from './commands';
import { botInTheAreaCommand } from './commands/bot-in-the-area.command';
import { verifyEmailCommand } from './commands/verify-email.command';
import { discordConfig } from './config/discord.config';
import { Commands, UserStatus } from './core/domain/commands.entity';
import { internalErrorMessage } from './messages';
const client = new Client({ 
  intents: discordConfig.intents,
  partials: discordConfig.partials,  
});

const LANGUAGE = 'pt-br'

const commands = new Commands(
  LANGUAGE, 
  helpCommand,
  botInTheAreaCommand,
  verifyEmailCommand
)

client.on('ready', (client) => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on('messageCreate', async message => {
  try {
    if(message.author.bot) return

    const verifyEmail = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    const commandData = String(message.content)
    .toLowerCase()
    .match( verifyEmail ) 
      ? commands.find('VERIFY_EMAIL') 
      : commands.find(message.content)
    if(commandData?.containMessage){
      await message.author.send( 
        commandData.getMessage(UserStatus.NOT_IS_PARTICIPANT)
      )
    }

    if(commandData?.containFunctions){
      const responses = await commandData.executeFunctions({
        message: message.content,
        serverId: message.guildId,
        channelId: message.channelId
      })

      responses.forEach(response => {
        if(response?.reply) {
          message.author.send(response.reply)
        }
      })
    }
  } catch (error) {
    console.error(error)
    internalErrorMessage.selectLanguage(LANGUAGE)
    const messageBot = internalErrorMessage.value
    if(messageBot) await message.reply(messageBot)
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);