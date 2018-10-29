import { Injectable, Type } from '@angular/core';
import { OneComponent } from './one.component';

@Injectable({ providedIn: 'root'})
export class ProviderService {
  getComponent(): Type<any> {
    return OneComponent;
  }
}
