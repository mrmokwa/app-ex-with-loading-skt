import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton-card',
  templateUrl: './skeleton-card.component.html',
  styleUrls: ['./skeleton-card.component.scss'],
})
export class SkeletonCardComponent implements OnInit {
  @Input() itens = 4;
  itemList: number[] = [];

  ngOnInit() {
    for (let index = 0; index < this.itens; index++) {
      this.itemList.push(index);
    }
  }
}
