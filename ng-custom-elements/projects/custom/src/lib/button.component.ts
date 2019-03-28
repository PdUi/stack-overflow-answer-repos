import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'custom-button',
  template: '<button (click)="handleClick()">{{label}}</button>',
  styles: [`
  button {
    border: solid 3px;
    padding: 8px 10px;
    background: tomato;
    font-size: 20px;
  }
  `],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent {
  @Input() label = 'default label';
  @Output() action = new EventEmitter<number>();

  /* tslint:disable-next-line:variable-name */
  private _clickCount = 0;

  handleClick() {
    this._clickCount++;
    this.action.emit(this._clickCount);
  }
}
