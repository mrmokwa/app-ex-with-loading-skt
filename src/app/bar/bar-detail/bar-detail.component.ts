import { Component, OnInit, inject } from '@angular/core';
import { BarDetailService } from './bar-detail.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-bar-detail',
  templateUrl: './bar-detail.component.html',
  styleUrls: ['./bar-detail.component.scss'],
  providers: [BarDetailService],
})
export class BarDetailComponent implements OnInit {
  store = inject(BarDetailService);
  route = inject(ActivatedRoute);

  id$ = this.route.params.pipe(map((params) => params['id']));
  next$ = this.id$.pipe(map((value) => ++value));
  previous$ = this.id$.pipe(map((value) => --value));

  ngOnInit(): void {
    this.store.initialize();
  }
}
