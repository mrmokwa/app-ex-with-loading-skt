import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BarDetailComponent } from './bar-detail/bar-detail.component';
import { BarMasterComponent } from './bar-master/bar-master.component';
import { SharedModule } from '../shared/shared.module';
import { BarRoutingModule } from './bar.routing';

@NgModule({
  declarations: [BarDetailComponent, BarMasterComponent],
  imports: [CommonModule, SharedModule, RouterModule, BarRoutingModule],
})
export class BarModule {}
