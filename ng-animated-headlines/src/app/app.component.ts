import { Component, AfterContentInit, ViewChild, ElementRef } from '@angular/core';

// import * as jQuery from 'jquery';
// import 'jquery-animated-headlines';

// import * as $ from 'jquery'; // in case u haven't imported it globally.
// import * as animatedHeadline from 'jquery-animated-headlines';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  @ViewChild('foo') fooElement: ElementRef<any>;

  ngAfterContentInit(): void {
    $(this.fooElement.nativeElement).animatedHeadline();
  }
}
