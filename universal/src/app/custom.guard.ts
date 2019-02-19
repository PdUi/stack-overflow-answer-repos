import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { AppComponent } from './app.component';

import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';

import { AuthenticationService } from './authentication.service';
import { DialogsService } from './dialog.service';

@Injectable({ providedIn: 'root' })
export class CustomerGuard implements CanActivate {

  constructor(
    private authService: AuthenticationService,
    private dialog: MatDialog,
    private dialogsService: DialogsService
  ) {
    console.log('customer guard created');
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    if (this.authService.isCustomer) {
      return true;
    }

    const dialog = this.dialog.open(AppComponent, {
      data: {
        errorMessage: this.authService.isLoggedIn ?
          'You don\t have access to this page, please use an appropriate account' :
          'Please authenticate to access this page'
      }
    });

    console.log(dialog);
    this.dialogsService.addDialog(dialog);

    return dialog.afterClosed().pipe(
      map(() => {
        return this.authService.isCustomer;
      })
    );
  }
}
