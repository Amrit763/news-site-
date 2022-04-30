import {
  CommonModule,
  DatePipe,
} from '@angular/common';
import { NgModule } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { NewsService } from 'src/app/admin/news/service/news.service';
import { SharedModule } from 'src/app/shared/shared.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    CarouselModule,
    // DatePipe
  ],
  providers:[NewsService,DatePipe]
})
export class DashboardModule { }
