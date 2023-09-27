import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { BarDetailService } from 'src/app/bar/bar-detail/bar-detail.service';

@Component({
  selector: 'app-baz-info',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule],
  templateUrl: './baz-info.component.html',
  styleUrls: ['./baz-info.component.scss'],
})
export class BazInfoComponent {
  store = inject(BarDetailService);
}
