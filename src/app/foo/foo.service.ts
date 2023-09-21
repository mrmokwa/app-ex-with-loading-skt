import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { FOO_DATA } from './foo.data';

@Injectable({
  providedIn: 'root',
})
export class FooService {
  constructor() {}

  getAll() {
    return of(FOO_DATA).pipe(delay(1000));
  }
}
