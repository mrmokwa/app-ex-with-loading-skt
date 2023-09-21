import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooComponent } from './foo/foo.component';
import { fooResolver } from './foo/foo.resolver';
import { BarComponent } from './bar/bar.component';
import { barResolver } from './bar/bar.resolver';
import { ContentLoaderComponent } from './shared/content-loader/content-loader.component';

const routes: Routes = [
  {
    path: 'bar',
    component: ContentLoaderComponent,
    resolve: { readyWhen: barResolver },
    children: [
      {
        path: '',
        component: BarComponent,
        resolve: { bar: barResolver },
      },
    ],
  },
  {
    path: 'foo',
    component: ContentLoaderComponent,
    resolve: { readyWhen: fooResolver },
    children: [
      {
        path: '',
        component: FooComponent,
        resolve: { foo: fooResolver },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
