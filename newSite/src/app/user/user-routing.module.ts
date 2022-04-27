import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { UsersComponent } from './users/users.component';

const routes: Routes = [
  // {
  //   path:'',
  //   redirectTo:'usernav',
  //   pathMatch:'full'
  // },
  {
    path:'',
    component:UsersComponent,
    children:[
      // {
      //   path:'dashboard',
      //   loadChildren:()=>import('./dashboard/dashboard.module').then(m=>
      //     m.DashboardModule)
      // },
      {
        path:'usernav',
        loadChildren:()=>import('./navbar/navbar.module').then(m=>
          m.NavbarModule)
      },
      {
        path:'politics',
        loadChildren:()=>import('./politics/politics.module').then(m=>
          m.PoliticsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
