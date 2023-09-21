import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export abstract class Store<T> {
  abstract get: () => Observable<T>;

  loading$ = new BehaviorSubject<boolean>(false);

  private store = new BehaviorSubject<T | null>(null);
  data$ = this.store.asObservable();

  set = (data: T) => this.store.next(data);

  clear = () => this.store.next(null);

  initialize() {
    this.refresh();
  }

  refresh(): void {
    this.get().subscribe((data) => this.store.next(data));
  }
}
