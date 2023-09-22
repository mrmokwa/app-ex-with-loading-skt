import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton-lines',
  templateUrl: './skeleton-lines.component.html',
  styleUrls: ['./skeleton-lines.component.scss'],
})
export class SkeletonLinesComponent implements OnInit {
  @Input() lines = 1;

  list: number[] = [];

  ngOnInit(): void {
    for (let index = 0; index < this.lines; index++) {
      this.list.push(index);
    }
  }
}
