import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BarMasterComponent } from './bar-master/bar-master.component';
import { BarDetailComponent } from './bar-detail/bar-detail.component';

const routes: Routes = [
  {
    path: 'bar',
    component: BarMasterComponent,
    children: [
      {
        path: ':code',
        component: BarDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarRoutingModule {}
