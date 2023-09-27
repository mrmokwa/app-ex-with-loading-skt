import { Component } from '@angular/core';
import { BarDetailService } from '../bar-detail/bar-detail.service';
import { map } from 'rxjs';

type BarWithoutBaz = Omit<Bar, 'baz'>;

@Component({
  selector: 'app-bar-detail-drawer-info',
  templateUrl: './bar-detail-drawer-info.component.html',
  styleUrls: ['./bar-detail-drawer-info.component.scss'],
})
export class BarDetailDrawerInfoComponent {
  constructor(public store: BarDetailService) {}

  id$ = this.store.data$.pipe(map((data) => data?.id));

  data$ = this.store.data$.pipe(
    map((data) => {
      if (data?.baz) delete data.baz;
      return data as BarWithoutBaz;
    })
  );
}
