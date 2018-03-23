import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import * as $ from 'jquery';
import 'magnific-popup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('img') imgElement: ElementRef;

  ngAfterViewInit(): void {
    $(this.imgElement.nativeElement).magnificPopup({ type: 'image' });
  }
}
