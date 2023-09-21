import { Injectable } from '@angular/core';
import { delay, filter, map, of, tap } from 'rxjs';

export const BAR_DATA: readonly Bar[] = [
  { code: 'A' }, //
  { code: 'B' },
  { code: 'C' },
  { code: 'D' },
];

@Injectable({
  providedIn: 'root',
})
export class BarService {
  constructor() {}

  getAll() {
    return of(BAR_DATA).pipe(delay(500));
  }

  getById(code: string) {
    return this.getAll().pipe(
      map((data) => data.find((x) => x.code === code)),
      tap((data) => {
        if (!data) throw '404_NOT_FOUND';
      }),
      filter(Boolean)
    );
  }
}
