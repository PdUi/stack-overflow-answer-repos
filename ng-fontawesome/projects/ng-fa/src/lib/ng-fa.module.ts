import { NgModule } from '@angular/core';
import { NgFaComponent } from './ng-fa.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [NgFaComponent],
  imports: [FontAwesomeModule],
  exports: [NgFaComponent, FontAwesomeModule]
})
export class NgFaModule { }
