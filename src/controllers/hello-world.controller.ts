import { get } from '@loopback/rest'

// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/context';

export class HelloWorldController {
  @get('/hello-world')
  hello(): string {
    return "Hello World!"
  }
}
