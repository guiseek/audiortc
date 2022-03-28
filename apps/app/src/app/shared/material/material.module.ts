import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  exports: [
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatSliderModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatFormFieldModule,
  ],
})
export class MaterialModule {}
