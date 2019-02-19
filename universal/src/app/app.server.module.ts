import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { MatDialogModule } from '@angular/material/dialog';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { RENDERED_BY_TOKEN } from './tokens';
// import { CustomerGuard } from './custom.guard';
// import { AuthenticationService } from './authentication.service';
// import { DialogsService } from './dialog.service';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    MatDialogModule,
    NoopAnimationsModule
  ],
  providers: [
    [{ provide: RENDERED_BY_TOKEN, useValue: 'server' }/*, CustomerGuard, AuthenticationService, DialogsService*/]
    // Add universal-only providers here
  ],
  bootstrap: [ AppComponent ],
})
export class AppServerModule {}
