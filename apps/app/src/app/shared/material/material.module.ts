import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  exports: [MatCardModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSelectModule],
})
export class MaterialModule {}
