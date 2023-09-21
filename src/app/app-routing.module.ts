import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooComponent } from './foo/foo.component';
import { fooResolver } from './foo/foo.resolver';

const routes: Routes = [
  {
    path: 'foo',
    component: FooComponent,
    resolve: { foo: fooResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
