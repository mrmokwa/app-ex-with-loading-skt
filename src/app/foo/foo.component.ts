import { Component, OnInit } from '@angular/core';

import { catchError, finalize, of } from 'rxjs';

import { FooService } from './foo.service';
import { LoadingIndicatorService } from '../shared/loading-indicator/loading-indicator.service';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss'],
})
export class FooComponent implements OnInit {
  constructor(
    private fooService: FooService,
    private loading: LoadingIndicatorService
  ) {}

  data$ = this.fooService.getAll().pipe(
    catchError(() => of(null)),
    finalize(() => this.loading.disable())
  );

  ngOnInit(): void {
    this.loading.enable();
  }
}
