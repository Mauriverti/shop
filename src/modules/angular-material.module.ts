import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import * as Mat from '@angular/material';

@NgModule({
  exports: [BrowserAnimationsModule, NoopAnimationsModule, Mat.MatIconModule, Mat.MatInputModule,
    Mat.MatCardModule, Mat.MatButtonModule, Mat.MatDividerModule, Mat.MatTooltipModule]
})
export class AngularMaterialModule {}