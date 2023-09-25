import { Injectable } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { switchMap } from 'rxjs';

import { BarService } from '../bar.service';
import { Store } from 'src/app/core/class/store';

@Injectable({
  providedIn: 'root',
})
export class BarDetailService extends Store<Bar> {
  constructor(private service: BarService, private route: ActivatedRoute) {
    super();
  }

  override getData = () =>
    this.route.params.pipe(
      switchMap(({ id }: Params) =>
        this.service
          .getById(id)
          .pipe(this.addErrorHandler(), this.addLoadingHandler())
      )
    );
}
