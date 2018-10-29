import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', loadChildren: '../dynamic-loader/dynamic-loader.module#DynamicLoaderModule' }
    ])
  ]
})
export class DynamicOneModule {
  constructor() {
    console.log('one');
  }
}
