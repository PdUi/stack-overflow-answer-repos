import { Component, Inject, ViewChildren, AfterViewChecked, Renderer2 } from '@angular/core';
import { RENDERED_BY_TOKEN } from './tokens';
import { DialogsService } from './dialog.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  title = 'Tour of Heroes';
  renderedBy;

  @ViewChildren(MatDialog) dialogs;
  constructor(@Inject(RENDERED_BY_TOKEN) val: string, private dialogsService: DialogsService, private renderer: Renderer2) {
    this.renderedBy = val;
  }

  clearDialogs() {
    this.dialogsService.clearDialogs();
    document.querySelectorAll('.cdk-overlay-container').forEach(dialog => {
      console.log('remove');
      dialog.remove();
    });
  }

  ngAfterViewChecked() {
    console.log(this.dialogs);
  }
}
