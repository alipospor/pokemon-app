import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Pipes */
import { TypeComponent } from './components/type/type.component';

/* Components */
import { CamelCasePipe } from './pipes/camel-case.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [

    CamelCasePipe,

    TypeComponent
  ],
  exports: [
    CommonModule,

    CamelCasePipe,
    TypeComponent
  ]
})

export class SharedModule { }
