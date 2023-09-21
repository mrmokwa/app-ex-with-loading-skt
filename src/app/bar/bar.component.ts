import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent {
  constructor(private route: ActivatedRoute) {}

  data$ = this.route.data.pipe(map((data) => data['bar'] as Bar[]));
}
