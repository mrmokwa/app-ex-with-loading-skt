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
import { StoreWrapperComponent } from './store-wrapper/store-wrapper.component';

const MATERIAL_MODULES = [
  MatProgressBarModule,
  MatCardModule,
  MatListModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
];

const SHARED_COMPONENTS = [SkeletonCardComponent, StoreWrapperComponent];

@NgModule({
  declarations: [SHARED_COMPONENTS],
  imports: [CommonModule, RouterModule, MATERIAL_MODULES],
  exports: [MATERIAL_MODULES, SHARED_COMPONENTS],
})
export class SharedModule {}
