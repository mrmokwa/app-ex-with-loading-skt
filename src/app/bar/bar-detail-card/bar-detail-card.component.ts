import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bar-detail-card',
  templateUrl: './bar-detail-card.component.html',
  styleUrls: ['./bar-detail-card.component.scss'],
})
export class BarDetailCardComponent {
  @Input() bar: Bar;
}
