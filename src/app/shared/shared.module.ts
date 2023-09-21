import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';

import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { SkeletonCardComponent } from './skeleton-card/skeleton-card.component';
import { RouterModule } from '@angular/router';

const MATERIAL_MODULES = [MatProgressBarModule, MatCardModule];

const SHARED_COMPONENTS = [LoadingIndicatorComponent, SkeletonCardComponent];

@NgModule({
  declarations: [SHARED_COMPONENTS],
  imports: [CommonModule, RouterModule, MATERIAL_MODULES],
  exports: [MATERIAL_MODULES, SHARED_COMPONENTS],
})
export class SharedModule {}
