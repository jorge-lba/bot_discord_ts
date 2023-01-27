export abstract class IHandle {
  abstract handle(_:any, replayFunc?: (message: string) => void):any
}