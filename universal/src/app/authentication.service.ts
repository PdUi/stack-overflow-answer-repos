import {
  Injectable
} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private _isCustomer = true;
  private _isLoggedIn = false;

  get isLoggedIn(): boolean {
    this._isLoggedIn = ! this._isLoggedIn;
    return this._isLoggedIn;
  }

  get isCustomer(): boolean {
    this._isCustomer = ! this._isCustomer;
    return this._isCustomer;
  }
}
