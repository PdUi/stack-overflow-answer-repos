import { Component } from '@angular/core';
// import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'lib-ng-fa',
  template: `
    <fa-icon [icon]="icon"></fa-icon>
  `,
  styles: []
})
export class NgFaComponent {
  // icon: IconDefinition = faAddressBook;
  icon = faAddressBook;
}
