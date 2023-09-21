import { Injectable } from '@angular/core';
import { BarService } from './bar.service';
import { Store } from '../core/class/store';

@Injectable()
export class BarStoreService extends Store<Bar[]> {
  override get = () => this.service.getAll();

  constructor(private service: BarService) {
    super();
  }
}
