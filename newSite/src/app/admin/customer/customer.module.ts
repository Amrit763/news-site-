import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule
  ]
})
export class CustomerModule { }
