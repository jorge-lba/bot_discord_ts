import { MessageBot } from "../core/domain/message-bot.entity";

const verifyEmailMessage = new MessageBot()

verifyEmailMessage.includeMessage('pt-br', 'Irei validar sua inscrição')

export { verifyEmailMessage }