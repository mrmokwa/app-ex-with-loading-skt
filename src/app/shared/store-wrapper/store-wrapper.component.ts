import { Component, Input } from '@angular/core';
import { map } from 'rxjs';
import { Store } from 'src/app/core/class/store';

@Component({
  selector: 'app-store-wrapper',
  templateUrl: './store-wrapper.component.html',
  styleUrls: ['./store-wrapper.component.scss'],
})
export class StoreWrapperComponent<T = any> {
  @Input() store: Store<T>;

  get state$() {
    return this.store.loading$.pipe(
      map((value) => (value ? 'PENDING' : 'READY'))
    );
  }
}
