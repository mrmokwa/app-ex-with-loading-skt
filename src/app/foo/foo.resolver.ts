import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

import { finalize } from 'rxjs';

import { FooService } from './foo.service';
import { LoadingIndicatorService } from '../shared/loading-indicator/loading-indicator.service';

export const fooResolver: ResolveFn<Foo[]> = (route, state) => {
  const loading = inject(LoadingIndicatorService);

  loading.enable();

  return inject(FooService)
    .getAll()
    .pipe(finalize(() => loading.disable()));
};
