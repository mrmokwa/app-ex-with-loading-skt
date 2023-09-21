import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';

const MATERIAL_MODULES = [MatProgressBarModule];

const SHARED_COMPONENTS = [LoadingIndicatorComponent];

@NgModule({
  declarations: [SHARED_COMPONENTS],
  imports: [CommonModule, MATERIAL_MODULES],
  exports: [MATERIAL_MODULES, SHARED_COMPONENTS],
})
export class SharedModule {}
