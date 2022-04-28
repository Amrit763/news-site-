import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { NewsService } from 'src/app/admin/news/service/news.service';
import { SharedModule } from 'src/app/shared/shared.module';

import { BusinessComponent } from './business/business.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import {
  EntertainmentComponent,
} from './entertainment/entertainment.component';
import {
  InternationalComponent,
} from './international/international.component';
import { LifeStyleComponent } from './life-style/life-style.component';
import { PoliticsSubComponent } from './politics-sub/politics-sub.component';
import { PoliticsComponent } from './politics/politics.component';
import { TravelsComponent } from './travels/travels.component';

@NgModule({
  declarations: [
    PoliticsComponent,
    BusinessComponent,
    TravelsComponent,
    EntertainmentComponent,
    InternationalComponent,
    LifeStyleComponent,
    PoliticsSubComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule,
    CarouselModule
  ],
  providers:[NewsService]
})
export class CategoriesModule { }
