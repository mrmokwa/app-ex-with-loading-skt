import { Component, OnInit } from '@angular/core';

import { FooStoreService } from './foo-store.service';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss'],
  providers: [FooStoreService],
})
export class FooComponent implements OnInit {
  constructor(public store: FooStoreService) {}

  ngOnInit(): void {
    this.store.initialize();
  }
}
