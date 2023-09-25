import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  catchError,
  combineLatest,
  finalize,
  map,
  of,
} from 'rxjs';
import { prepare } from './prepare';

@Injectable()
export abstract class Store<T> {
  abstract getData: () => Observable<T>;

  private loadingHandler = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingHandler.asObservable();

  private dataHandler = new BehaviorSubject<T>(null as T);
  data$ = this.dataHandler.asObservable();

  private errorHandler = new BehaviorSubject<HttpErrorResponse | null>(null);
  error$ = this.errorHandler.asObservable();

  viewModel$ = combineLatest([this.data$, this.loading$, this.error$]).pipe(
    map(([data, loading, error]) => ({ data, loading, error }))
  );

  initialize() {
    this.refresh();
  }

  refresh(): void {
    this.getData().subscribe((data) => this.dataHandler.next(data));
  }

  addErrorHandler() {
    return (source: Observable<T>) =>
      source.pipe(
        prepare(() => {
          this.dataHandler.next(null as T);
          this.errorHandler.next(null);
        }),
        catchError((e: HttpErrorResponse) => {
          this.errorHandler.next(e);
          return of(null as T);
        })
      );
  }

  addLoadingHandler() {
    return (source: Observable<T>) =>
      source.pipe(
        prepare(() => this.loadingHandler.next(true)),
        finalize(() => this.loadingHandler.next(false))
      );
  }
}
