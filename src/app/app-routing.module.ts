import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FooComponent } from './foo/foo.component';

const routes: Routes = [
  {
    path: 'foo',
    component: FooComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
