import { CommandBot } from "../core/domain/command-bot.entity";
import { UserStatus } from "../core/domain/commands.entity";
import { botInTheAreaMessage } from "../messages";

const botInTheAreaCommand = new CommandBot(
  '!bot',
)

botInTheAreaCommand.includeMessage( botInTheAreaMessage, UserStatus.IS_PARTICIPANT)

export { botInTheAreaCommand }