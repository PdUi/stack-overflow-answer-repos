import { Directive, Input, OnInit, ElementRef } from '@angular/core';
import tippy from 'tippy.js';

@Directive({
  /* tslint:disable-next-line */
  selector: '[tippy]'
})
export class TippyDirective implements OnInit {

  @Input('tippyOptions') public tippyOptions: Object;

  constructor(private el: ElementRef) {
    this.el = el;
  }

  public ngOnInit() {
    tippy(this.el.nativeElement, this.tippyOptions || {}, true);
  }
}
