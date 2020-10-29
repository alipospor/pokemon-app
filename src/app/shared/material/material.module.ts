import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* material modules */
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    MatCardModule
  ]
})
export class AppMaterialModule { }
