import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

import * as ouibounce from 'ouibounce';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'ng-ouibounce';
  @ViewChild('modal') modal: ElementRef;

  ngAfterViewInit() {
    ouibounce(this.modal.nativeElement, { aggressive: true });
  }
}
