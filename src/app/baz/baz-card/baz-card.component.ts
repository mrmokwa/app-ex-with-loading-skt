import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-baz-card',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule],
  templateUrl: './baz-card.component.html',
  styleUrls: ['./baz-card.component.scss'],
})
export class BazCardComponent {
  @Input() baz: Baz | undefined;
}
