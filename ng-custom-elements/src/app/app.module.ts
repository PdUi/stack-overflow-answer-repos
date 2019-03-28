import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustomModule } from 'custom';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
