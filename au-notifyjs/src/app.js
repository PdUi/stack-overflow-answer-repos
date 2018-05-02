import 'jquery';
import 'notifyjs-browser';

export class App {
  constructor() {
    this.message = 'Hello World!';
  }

  attached() {
    $.notify('Test 123', 'error');
  }
}
