import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BarDetailComponent } from './bar-detail/bar-detail.component';
import { BarMasterComponent } from './bar-master/bar-master.component';
import { SharedModule } from '../shared/shared.module';
import { BarRoutingModule } from './bar.routing';
import { BarDetailCardComponent } from './bar-detail-card/bar-detail-card.component';
import { BarDetailDrawerInfoComponent } from './bar-detail-drawer-info/bar-detail-drawer-info.component';
import { BarDetailToolbarComponent } from './bar-detail-toolbar/bar-detail-toolbar.component';

@NgModule({
  declarations: [
    BarDetailComponent,
    BarMasterComponent,
    BarDetailCardComponent,
    BarDetailDrawerInfoComponent,
    BarDetailToolbarComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule, BarRoutingModule],
})
export class BarModule {}
