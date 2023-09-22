import { Injectable, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { map, switchMap, tap } from 'rxjs';

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

  id$ = this.route.params.pipe(map((params) => +params['id']));

  override get = () =>
    this.id$.pipe(
      switchMap((id) => this.service.getById(id).pipe(indicate(this.loading$)))
    );
}
