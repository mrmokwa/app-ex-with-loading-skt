import { Subject, Observable, finalize } from 'rxjs';

import { prepare } from './prepare';

export function indicate<T>(
  subject: Subject<boolean>
): (source: Observable<T>) => Observable<T> {
  return (source: Observable<T>): Observable<T> =>
    source.pipe(
      prepare(() => subject.next(true)),
      finalize(() => subject.next(false))
    );
}
