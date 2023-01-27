export class MessageBot {
  private _language: string;
  private readonly _messages: Map<string, string >

  constructor(){
    this._language = process.env.DEFAULT_LANGUAGE || 'pt-br'
    this._messages = new Map()
  }
  selectLanguage(value: string) {
    this._language = value
  }

  includeMessage( language: string, message: string ){
     this._messages.set( language, message )
  }

  get value(){
    return this._messages.get(this._language)
  }
}