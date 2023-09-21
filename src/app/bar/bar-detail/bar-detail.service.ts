import { Injectable, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap } from 'rxjs';

import { BarService } from '../bar.service';
import { Store } from 'src/app/core/class/store';
import { indicate } from 'src/app/core/class/indicate';

@Injectable({
  providedIn: 'root',
})
export class BarDetailService extends Store<Bar> {
  constructor(private service: BarService, private route: ActivatedRoute) {
    super();
  }

  override get = () =>
    this.route.params.pipe(
      switchMap(({ code }) =>
        this.service.getById(code).pipe(indicate(this.loading$))
      )
    );
}
