import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DynamicLoaderModule } from './dynamic-loader/dynamic-loader.module';

import { AppComponent } from './app.component';
import { SlotComponent } from './dynamic-loader/slot.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // DynamicLoaderModule,
    RouterModule.forRoot([
      // { path: 'dynamic-loader', component: SlotComponent },
      // { path: 'dynamic-loader', loadChildren: './dynamic-loader/dynamic-loader.module#DynamicLoaderModule' },
      { path: 'dynamic-loader', loadChildren: './dynamic-one/dynamic-one.module#DynamicOneModule' },
      { path: '', component: AppComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
