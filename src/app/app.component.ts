import { Component } from '@angular/core';
import { LoadingIndicatorService } from './shared/loading-indicator/loading-indicator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'LoadingSkeleton';

  constructor(public loadIncService: LoadingIndicatorService) {}
}
