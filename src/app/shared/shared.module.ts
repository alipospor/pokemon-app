import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Pipes */
import { CamelCasePipe } from './pipes/camel-case.pipe';
import { OrderPipe } from './pipes/order.pipe';

/* Components */
import { TypeComponent } from './components/type/type.component';

/* Modules */

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [

    CamelCasePipe,
    OrderPipe,

    TypeComponent,

  ],
  exports: [
    CommonModule,

    CamelCasePipe,
    OrderPipe,

    TypeComponent,

  ]
})

export class SharedModule { }
