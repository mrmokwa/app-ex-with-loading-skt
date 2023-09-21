import { Component, OnDestroy, OnInit } from '@angular/core';

import { BarStoreService } from './bar-store.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
  providers: [BarStoreService],
})
export class BarComponent implements OnInit {
  constructor(public store: BarStoreService) {}

  ngOnInit(): void {
    this.store.initialize();
  }
}
