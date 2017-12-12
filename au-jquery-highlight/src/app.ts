import * as $ from "jquery";
import "jquery-highlight";

export class App {
  public attached() {
    $('#content').highlight('lorem');
  }
}
