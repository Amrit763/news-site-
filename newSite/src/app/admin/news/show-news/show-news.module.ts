import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowNewsRoutingModule } from './show-news-routing.module';
import { ShowNewsComponent } from './show-news/show-news.component';


@NgModule({
  declarations: [
    ShowNewsComponent
  ],
  imports: [
    CommonModule,
    ShowNewsRoutingModule
  ]
})
export class ShowNewsModule { }
