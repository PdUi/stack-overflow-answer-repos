import {
  Injectable
} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DialogsService {
  private _dialogs = [];

  constructor() {
    console.log('created');
  }

  addDialog(dialog) {
    this._dialogs.push(dialog);
  }

  clearDialogs() {
    for (let i = 0, l = this._dialogs.length; i < l; i++) {
      const dialog = this._dialogs.pop();
      dialog.close();
      console.log('closed');
    }
  }
}
