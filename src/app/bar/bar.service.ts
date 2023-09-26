import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, filter, map, of, tap } from 'rxjs';

const BAR_DATA: readonly Bar[] = [
  {
    id: 1,
    first_name: 'Bee',
    last_name: 'Mattessen',
    age: 24,
    email: 'bmattessen0@cargocollective.com',
  },
  {
    id: 2,
    first_name: 'Kaila',
    last_name: 'Loache',
    age: 48,
    email: 'kloache1@woothemes.com',
  },
  {
    id: 3,
    first_name: 'Bettina',
    last_name: 'Moukes',
    age: 32,
    email: 'bmoukes2@youtube.com',
  },
  {
    id: 4,
    first_name: 'Randee',
    last_name: 'Autry',
    age: 30,
    email: 'rautry3@nbcnews.com',
  },
  {
    id: 5,
    first_name: 'Jerad',
    last_name: 'Canto',
    age: 68,
    email: 'jcanto4@cyberchimps.com',
  },
  {
    id: 6,
    first_name: 'Cornelius',
    last_name: 'Rymour',
    age: 37,
    email: 'crymour5@jiathis.com',
  },
  {
    id: 7,
    first_name: 'Gilli',
    last_name: 'Chartre',
    age: 83,
    email: 'gchartre6@lulu.com',
  },
  {
    id: 8,
    first_name: 'Daphne',
    last_name: 'Mieville',
    age: 34,
    email: 'dmieville7@tuttocitta.it',
  },
  {
    id: 9,
    first_name: 'Nichole',
    last_name: 'Bridgestock',
    age: 47,
    email: 'nbridgestock8@oaic.gov.au',
  },
  {
    id: 10,
    first_name: 'Melony',
    last_name: 'Gorhardt',
    age: 23,
    email: 'mgorhardt9@amazon.co.uk',
  },
];
@Injectable({
  providedIn: 'root',
})
export class BarService {
  constructor() {}

  getAll() {
    return of(BAR_DATA);
  }

  getById(id: number) {
    return of(BAR_DATA).pipe(
      delay(1500),
      map((list) => list.find((data) => data.id === +id)),
      tap((bar) => {
        if (bar?.id === 1)
          throw new HttpErrorResponse({ status: 403, statusText: 'FORBIDDEN' });

        if (!bar)
          throw new HttpErrorResponse({ status: 404, statusText: 'NOT_FUND' });
      }),
      filter(Boolean)
    );
  }
}
