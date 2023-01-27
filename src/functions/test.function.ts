import { IHandle } from "../core/handle.abstract";

export class FunctionTest extends IHandle {
  handle(message: string) {
    console.log(message);
  }
}