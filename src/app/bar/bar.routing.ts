import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BarMasterComponent } from './bar-master/bar-master.component';
import { BarDetailComponent } from './bar-detail/bar-detail.component';
import { BarDetailDrawerInfoComponent } from './bar-detail-drawer-info/bar-detail-drawer-info.component';

const routes: Routes = [
  {
    path: 'bar',
    component: BarMasterComponent,
  },
  {
    path: 'bar/:id',
    component: BarDetailComponent,
    children: [
      {
        path: 'info',
        component: BarDetailDrawerInfoComponent,
      },
      {
        // Exemplo com lazy-loading e standalone
        path: 'baz',
        loadComponent: () =>
          import('../baz/baz-info/baz-info.component').then(
            (x) => x.BazInfoComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarRoutingModule {}
