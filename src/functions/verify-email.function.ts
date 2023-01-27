import { IHandle } from "../core/handle.abstract";

export class VerifyEmail extends IHandle {
  handle(data: {message: string, serverId: string, channelId: string}) {
    return {
      reply: data.message === 'jorge@gmail.com' 
        ? 'Inscrição validada com sucesso!!'
        : `Ops! Não localizei o email _**${data.message}**_, o email deve ser o mesmo informado na inscrição.`
    }
  }
}