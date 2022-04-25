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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
