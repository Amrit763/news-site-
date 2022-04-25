import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {
    path:'',
    component:NewsComponent,
    children:[
      {
        path:'add-news',
        loadChildren:()=>import('./add-news/add-news.module').then(m=>
          m.AddNewsModule)
      },
      {
       path:'show-news',
       loadChildren:()=>import('./show-news/show-news.module').then(m=>
        m.ShowNewsModule) 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
