import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { PoliticsComponent } from './politics/politics.component';
import { SubPoliticsComponent } from './sub-politics/sub-politics.component';

const routes: Routes = [
  {
    path:'',
    component:PoliticsComponent
  },
  {
    path:'sub',
    component:SubPoliticsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliticsRoutingModule { }
