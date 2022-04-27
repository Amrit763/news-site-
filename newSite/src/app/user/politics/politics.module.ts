import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NewsService } from 'src/app/admin/news/service/news.service';
import { SharedModule } from 'src/app/shared/shared.module';

import { PoliticsRoutingModule } from './politics-routing.module';
import { PoliticsComponent } from './politics/politics.component';
import { SubPoliticsComponent } from './sub-politics/sub-politics.component';

@NgModule({
  declarations: [
    PoliticsComponent,
    SubPoliticsComponent
  ],
  imports: [
    CommonModule,
    PoliticsRoutingModule,
    SharedModule
  ],
  providers:[NewsService]
})
export class PoliticsModule { }
