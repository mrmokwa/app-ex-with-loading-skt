import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-bar-detail-toolbar',
  templateUrl: './bar-detail-toolbar.component.html',
  styleUrls: ['./bar-detail-toolbar.component.scss'],
})
export class BarDetailToolbarComponent {
  @Input() bar: Bar | null;
}
