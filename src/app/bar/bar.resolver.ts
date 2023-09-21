import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { BarService } from './bar.service';

export const barResolver: ResolveFn<Bar[]> = (route, state) => {
  return inject(BarService).getAll();
};
