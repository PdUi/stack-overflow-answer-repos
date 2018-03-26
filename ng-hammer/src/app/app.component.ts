import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import * as Hammer from 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('img') imgElement: ElementRef;
  title = 'app';

  ngAfterViewInit(): void {
    const hammer = new Hammer(this.imgElement.nativeElement);
    hammer.on('press', function(e) {
      // e.target.classList.toggle('expand');
      console.log('You\'re pressing me!');
      console.log(e);
    });
  }
}
