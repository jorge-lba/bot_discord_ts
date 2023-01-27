import { IHandle } from "../handle.abstract"
import { UserStatus } from "./commands.entity"
import { MessageBot } from "./message-bot.entity"

export class CommandBot {
  private readonly _keys: string[]
  private _language: string
  private _message: Map< UserStatus, MessageBot >
  private _functions: IHandle[]

  constructor(...keys: string[]){
    this._keys = keys.map(
      key => key.trim().replace(/ /g, '_').toLowerCase()
    )
    this._message = new Map()
    this._language = process.env.DEFAULT_LANGUAGE || 'pt-br'
    this._functions = []
  }

  selectLanguage(value: string){
    this._language = value
  }

  includeMessage(message: MessageBot, userStatus: UserStatus){
    if(!(message instanceof MessageBot)){
      throw new Error('Include invalid Message')
    }

    this._message.set(userStatus, message)
  }

  getMessage(userStatus: UserStatus) {
    const message = this._message.get(userStatus)
    if(!message){
      throw new Error('Message not implemented')
    }
    message.selectLanguage(this._language)
    if(!message.value){
      throw new Error(`Message by language "${this._language}" not implemented`)
    }
    return message.value
  }
  
  get keys() {
    return this._keys
  }
  
  compareKeyIsValid(value: string): boolean{
    const command = value.trim().replace(/ /g, '_').toLowerCase() 
    return this.keys.includes(command) 
  }
  
  get containMessage(): boolean{
    return this._message.size > 0
  }

  includeFunction(func: IHandle){
    if(!func.handle) throw new Error('Include function invalid')
    this._functions.push(func)
  }

  async executeFunctions(data?: any){
    return await Promise.all(this._functions.map(func => func.handle(data)))
  }

  get containFunctions(): boolean {
    return this._functions.length > 0
  }
}