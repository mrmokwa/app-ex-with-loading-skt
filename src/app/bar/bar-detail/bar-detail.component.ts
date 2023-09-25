import { Component, OnInit, inject } from '@angular/core';
import { BarDetailService } from './bar-detail.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-bar-detail',
  templateUrl: './bar-detail.component.html',
  styleUrls: ['./bar-detail.component.scss'],
  providers: [BarDetailService],
})
export class BarDetailComponent implements OnInit {
  store = inject(BarDetailService);

  data$ = this.store.data$.pipe(filter(Boolean));

  ngOnInit(): void {
    this.store.initialize();
  }
}
