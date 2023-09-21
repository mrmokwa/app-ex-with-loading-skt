import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-content-loader',
  templateUrl: './content-loader.component.html',
  styleUrls: ['./content-loader.component.scss'],
})
export class ContentLoaderComponent {
  constructor(private route: ActivatedRoute) {}

  data$ = this.route.data.pipe(
    map((data) => ({
      ready: Boolean(data['readyWhen']),
    }))
  );
}
