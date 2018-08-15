import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('div') divElement: ElementRef;

  ngAfterViewInit(): void {
    $(this.divElement.nativeElement).popover({content: 'foobar', placement: 'bottom'}).popover('show');
  }
}
