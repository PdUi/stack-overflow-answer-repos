import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, DoBootstrap } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [BrowserModule],
  entryComponents: [ButtonComponent]
})
export class CustomModule implements DoBootstrap {
  constructor(injector: Injector) {
    const customButton = createCustomElement(ButtonComponent, { injector });
    customElements.define('custom-button', customButton);
  }

  ngDoBootstrap() {}
}
