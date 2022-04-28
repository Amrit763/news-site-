import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { BusinessComponent } from './business/business.component';
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

const routes: Routes = [{
  path:'',
  redirectTo:'politics',
  pathMatch:'full'
},{
  path:'politics',
  component:PoliticsComponent
},{
  path:'business',
  component:BusinessComponent
},{
  path:'entertainment',
  component:EntertainmentComponent
},{
  path:'international',
  component:InternationalComponent
},{
  path:'travels',
  component:TravelsComponent
},{
  path:'life-style',
  component:LifeStyleComponent
},
{
  path:'politics-sub',
  component:PoliticsSubComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
