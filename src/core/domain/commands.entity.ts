import { CommandBot } from "./command-bot.entity"

export class Commands {
  private readonly _commands: CommandBot[]
  private readonly _language: string

  constructor( language: string, ...commands: CommandBot[]){
    this._commands = commands
    this._language = language
  }

  find(key: string){
    const selectedCommand = this._commands.find(command => 
      command.compareKeyIsValid(key)
    )
    if(!selectedCommand){
      return
    }

    selectedCommand.selectLanguage(this._language)
    return selectedCommand
  }
}

export enum UserStatus {
  IS_PARTICIPANT = 'IS_PARTICIPANT',
  NOT_IS_PARTICIPANT = 'NOT_IS_PARTICIPANT'
}