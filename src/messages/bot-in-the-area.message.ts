import { MessageBot } from "../core/domain/message-bot.entity";

const botInTheAreaMessage = new MessageBot()

botInTheAreaMessage.includeMessage('pt-br', 'Bot na area!!!')
botInTheAreaMessage.includeMessage('en', 'Bot in the area!!!')
botInTheAreaMessage.includeMessage('es', 'Bot en el área!!!')

export { botInTheAreaMessage }