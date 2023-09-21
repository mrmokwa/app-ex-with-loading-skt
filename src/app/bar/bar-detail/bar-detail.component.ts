import { Component, OnInit, inject } from '@angular/core';
import { BarDetailService } from './bar-detail.service';

@Component({
  selector: 'app-bar-detail',
  templateUrl: './bar-detail.component.html',
  styleUrls: ['./bar-detail.component.scss'],
  providers: [BarDetailService],
})
export class BarDetailComponent implements OnInit {
  store = inject(BarDetailService);

  ngOnInit(): void {
    this.store.initialize();
  }
}
