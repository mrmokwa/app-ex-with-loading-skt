import { Component, OnInit } from '@angular/core';

import { catchError, finalize, of } from 'rxjs';

import { BarService } from './bar.service';
import { LoadingIndicatorService } from '../shared/loading-indicator/loading-indicator.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent implements OnInit {
  constructor(
    private service: BarService,
    private loader: LoadingIndicatorService
  ) {}

  data$ = this.service.getAll().pipe(
    catchError(() => of(null)),
    finalize(() => this.loader.disable())
  );

  ngOnInit(): void {
    this.loader.enable();
  }
}
