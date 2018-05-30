import { Component, ElementRef, ViewChild, AfterContentInit } from '@angular/core';

import * as $ from 'jquery';
import 'jstree';

// declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  @ViewChild('foo') fooElement: ElementRef<any>;

  ngAfterContentInit(): void {
    $(this.fooElement.nativeElement).jstree();
    // $('#foo').jstree();
  }
}
