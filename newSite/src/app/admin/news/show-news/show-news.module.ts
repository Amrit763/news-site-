import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { ShowNewsRoutingModule } from './show-news-routing.module';
import { ShowNewsComponent } from './show-news/show-news.component';

@NgModule({
  declarations: [
    ShowNewsComponent
  ],
  imports: [
    CommonModule,
    ShowNewsRoutingModule,
    SharedModule
  ]
})
export class ShowNewsModule { }
