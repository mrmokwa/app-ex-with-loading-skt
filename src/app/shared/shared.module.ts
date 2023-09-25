import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SkeletonCardComponent } from './skeleton-card/skeleton-card.component';
import { SkeletonLinesComponent } from './skeleton-lines/skeleton-lines.component';
import { DrawerNavigationDirective } from './directives/drawer-navigation.directive';
import { SidenavAutoModeDirective } from './directives/sidenav-auto-mode.directive';
import { TopProgressBarComponent } from './top-progress-bar/top-progress-bar.component';
import { HttpErrorComponent } from './http-error/http-error.component';

const MATERIAL_MODULES = [
  MatProgressBarModule,
  MatCardModule,
  MatListModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
];

const SHARED_COMPONENTS = [
  SkeletonCardComponent,
  SkeletonLinesComponent,
  TopProgressBarComponent,
  HttpErrorComponent,
];

const SHARED_DIRECTIVES = [DrawerNavigationDirective, SidenavAutoModeDirective];

@NgModule({
  declarations: [SHARED_COMPONENTS, SHARED_DIRECTIVES],
  imports: [CommonModule, RouterModule, MATERIAL_MODULES],
  exports: [MATERIAL_MODULES, SHARED_COMPONENTS, SHARED_DIRECTIVES],
})
export class SharedModule {}
