import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

import { finalize } from 'rxjs';

import { BarService } from './bar.service';
import { LoadingIndicatorService } from '../shared/loading-indicator/loading-indicator.service';

export const barResolver: ResolveFn<Bar[]> = (route, state) => {
  const loading = inject(LoadingIndicatorService);

  loading.enable();

  return inject(BarService)
    .getAll()
    .pipe(finalize(() => loading.disable()));
};
