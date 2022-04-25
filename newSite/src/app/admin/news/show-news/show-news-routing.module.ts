import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { ShowNewsComponent } from './show-news/show-news.component';

const routes: Routes = [
  {
    path:'',
    component:ShowNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowNewsRoutingModule { }
