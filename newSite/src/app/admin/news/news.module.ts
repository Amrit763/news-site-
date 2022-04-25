import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news/news.component';
import { NewsService } from './service/news.service';

@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule
  ],
  providers:[NewsService]
})
export class NewsModule { }
