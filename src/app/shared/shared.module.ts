import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';

import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { SkeletonCardComponent } from './skeleton-card/skeleton-card.component';
import { ContentLoaderComponent } from './content-loader/content-loader.component';
import { RouterModule } from '@angular/router';

const MATERIAL_MODULES = [MatProgressBarModule, MatCardModule];

const SHARED_COMPONENTS = [LoadingIndicatorComponent, ContentLoaderComponent];

@NgModule({
  declarations: [SHARED_COMPONENTS, SkeletonCardComponent],
  imports: [CommonModule, RouterModule, MATERIAL_MODULES],
  exports: [MATERIAL_MODULES, SHARED_COMPONENTS],
})
export class SharedModule {}
