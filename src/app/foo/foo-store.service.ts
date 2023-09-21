import { Injectable } from '@angular/core';
import { Store } from '../core/class/store';
import { FooService } from './foo.service';

@Injectable({
  providedIn: 'root',
})
export class FooStoreService extends Store<Foo[]> {
  override get = () => this.service.getAll();

  constructor(private service: FooService) {
    super();
  }
}
