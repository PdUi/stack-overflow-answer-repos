import { success } from 'toastr';

export class App {
  message = 'Hello World!';

  attached() {
    success('here');
  }
}
