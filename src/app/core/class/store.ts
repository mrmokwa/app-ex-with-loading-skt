import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, finalize } from 'rxjs';
import { Loader } from './loader';

@Injectable()
export abstract class Store<T> {
  abstract get: () => Observable<T>;

  private loader = new Loader();

  loading$ = this.loader.loading$;

  private store = new BehaviorSubject<T | null>(null);
  data$ = this.store.asObservable();

  set = (data: T) => this.store.next(data);

  clear = () => this.store.next(null);

  initialize() {
    this.refresh();
  }

  refresh(): void {
    this.loader.enable();
    this.get()
      .pipe(finalize(() => this.loader.disable()))
      .subscribe((data) => this.store.next(data));
  }
}
