import { MessageBot } from "../core/domain/message-bot.entity";

const internalErrorMessage = new MessageBot()

internalErrorMessage.includeMessage(
  'pt-br', 
  'Ops! Houve um erro.'
)

internalErrorMessage.includeMessage(
  'en', 
  'Oops! There was an error.'
)

internalErrorMessage.includeMessage(
  'es', 
  '¡Ups! Hubo un error.'
)

export { internalErrorMessage }