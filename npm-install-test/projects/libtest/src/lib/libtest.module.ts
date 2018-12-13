import { NgModule } from '@angular/core';
import { LibtestComponent } from './libtest.component';
import { RoPipe } from './ro.pipe';

@NgModule({
  declarations: [LibtestComponent, RoPipe],
  imports: [
  ],
  exports: [LibtestComponent, RoPipe]
})
export class LibtestModule { }
