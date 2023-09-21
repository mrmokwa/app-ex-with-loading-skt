import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { FooService } from './foo.service';

export const fooResolver: ResolveFn<Foo[]> = (route, state) => {
  return inject(FooService).getAll();
};
