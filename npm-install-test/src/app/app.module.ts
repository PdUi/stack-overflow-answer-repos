import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LibtestModule } from 'projects/libtest/src/public_api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LibtestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
