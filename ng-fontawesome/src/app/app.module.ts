import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgFaModule } from 'ng-fa';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NgFaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
