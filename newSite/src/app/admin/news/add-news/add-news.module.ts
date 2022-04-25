import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { AddNewsRoutingModule } from './add-news-routing.module';
import { AddNewsComponent } from './add-news/add-news.component';

@NgModule({
  declarations: [
    AddNewsComponent
  ],
  imports: [
    CommonModule,
    AddNewsRoutingModule,
    // HttpClientModule,
    SharedModule
  ]
})
export class AddNewsModule { }
