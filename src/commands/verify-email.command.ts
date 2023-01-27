import { CommandBot } from "../core/domain/command-bot.entity";
import { UserStatus } from "../core/domain/commands.entity";
import { VerifyEmail } from "../functions";
import { verifyEmailMessage } from "../messages";

const verifyEmailCommand = new CommandBot(
  'VERIFY_EMAIL',
)

verifyEmailCommand.includeMessage( verifyEmailMessage, UserStatus.NOT_IS_PARTICIPANT)
verifyEmailCommand.includeFunction( new VerifyEmail() )

export { verifyEmailCommand }