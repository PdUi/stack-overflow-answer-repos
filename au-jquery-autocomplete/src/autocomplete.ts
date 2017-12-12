import { customAttribute, inject } from 'aurelia-framework'
import * as $ from 'jquery';
import 'jquery-ui';

@customAttribute("autocomplete")
@inject(Element)
export class Autocomplete {
  constructor(private element: Element) {
  }

  public attached() {
    var aTags = ["ask","always", "all", "alright", "one", "foo", "blackberry", "tweet","force9", "westerners", "sport"];
      $(this.element).autocomplete({source: aTags});
  }
}
