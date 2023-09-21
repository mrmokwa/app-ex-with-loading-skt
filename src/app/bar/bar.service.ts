import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { BAR_DATA } from './bar.data';

@Injectable({
  providedIn: 'root',
})
export class BarService {
  constructor() {}

  getAll() {
    return of(BAR_DATA).pipe(delay(500));
  }
}
