import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';

import { MsgServiceService } from './service/msg-service.service';
import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared/shared.component';

@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers:[MsgServiceService],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ]
})
export class SharedModule { }
