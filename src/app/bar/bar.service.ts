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
    baz: {
      job_title: 'Occupational Therapist',
      salary: 130158.88,
      company: 'Divavu',
      industry: 'retail',
      years_experience: 42,
    },
  },
  {
    id: 2,
    first_name: 'Kaila',
    last_name: 'Loache',
    age: 48,
    email: 'kloache1@woothemes.com',
    baz: {
      job_title: 'Staff Accountant IV',
      salary: 396985.45,
      company: 'Eayo',
      industry: 'retail',
      years_experience: 33,
    },
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
    baz: {
      job_title: 'Senior Financial Analyst',
      salary: 243475.39,
      company: 'Youopia',
      industry: 'healthcare',
      years_experience: 10,
    },
  },
  {
    id: 5,
    first_name: 'Jerad',
    last_name: 'Canto',
    age: 68,
    email: 'jcanto4@cyberchimps.com',
    baz: {
      job_title: 'Nurse Practicioner',
      salary: 639426.68,
      company: 'Abatz',
      industry: 'retail',
      years_experience: 45,
    },
  },
  {
    id: 6,
    first_name: 'Cornelius',
    last_name: 'Rymour',
    age: 37,
    email: 'crymour5@jiathis.com',
    baz: {
      job_title: 'Product Engineer',
      salary: 474845.01,
      company: 'Tagpad',
      industry: 'healthcare',
      years_experience: 13,
    },
  },
  {
    id: 7,
    first_name: 'Gilli',
    last_name: 'Chartre',
    age: 83,
    email: 'gchartre6@lulu.com',
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
