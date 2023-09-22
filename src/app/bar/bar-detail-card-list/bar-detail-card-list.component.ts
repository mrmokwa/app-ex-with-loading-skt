import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bar-detail-card-list',
  templateUrl: './bar-detail-card-list.component.html',
  styleUrls: ['./bar-detail-card-list.component.scss'],
})
export class BarDetailCardListComponent {
  @Input() bar: Bar;
}
