import { NgModule } from '@angular/core';

import { OneComponent } from './one.component';
import { ProviderService } from './provider.service';

@NgModule({
  declarations: [ OneComponent ],
  entryComponents: [ OneComponent ],
  exports: [ OneComponent ],
  providers: [ ProviderService ]
})
export class DynamicProviderModule { }
