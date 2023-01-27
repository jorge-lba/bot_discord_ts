import { CommandBot } from "../core/domain/command-bot.entity";
import { UserStatus } from "../core/domain/commands.entity";
import { FunctionTest } from "../functions";
import { helpMessage } from "../messages";

const helpCommand = new CommandBot(
  'help', 
  'ajuda', 
  'ayuda', 
  'comando',
  'command'
)

helpCommand.includeMessage(helpMessage, UserStatus.IS_PARTICIPANT)
helpCommand.includeFunction( new FunctionTest() )

export { helpCommand }