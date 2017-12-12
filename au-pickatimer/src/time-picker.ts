import { customAttribute, inject } from 'aurelia-framework'
import * as $ from 'jquery';
import 'picker';
import 'pickatime';

@customAttribute("timepicker")
@inject(Element)
export class TimePicker {
  constructor(private element: Element) {
  }

  public attached() {
      $(this.element).pickatime()
        .on("change", (e: any) => {
          this.fireEvent(e.target, "input");
        });
  }

  createEvent(name: string) {
    const event = document.createEvent("Event");
    event.initEvent(name, true, true);
 console.log(name, event);
    return event;
  }

  fireEvent(element: EventTarget, name: string) {
    const event = this.createEvent(name);
    element.dispatchEvent(event);

    console.log(element, name);
  }
}
