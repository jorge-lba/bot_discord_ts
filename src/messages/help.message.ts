import { MessageBot } from "../core/domain/message-bot.entity";

const helpMessage = new MessageBot()
helpMessage.includeMessage('pt-br', 
`
 **Comandos**
`
)

export { helpMessage }