import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DynamicProviderModule } from '../dynamic-provider/dynamic-provider.module';

import { SlotComponent } from './slot.component';

@NgModule({
  declarations: [ SlotComponent ],
  imports: [
    DynamicProviderModule,
    RouterModule.forChild([
      { path: '', component: SlotComponent }
    ])
  ]
})
export class DynamicLoaderModule { }
