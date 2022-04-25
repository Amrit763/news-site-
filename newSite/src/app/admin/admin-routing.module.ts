import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
  path:'',
  redirectTo:'admin-dashboard',
  pathMatch:'full'
},
{
  path:'',
  component:AdminComponent,
  children:[
    {
      path:'news',
      loadChildren:()=>import('./news/news.module').then(m=>
        m.NewsModule)
    },{
      path:'admin-dashboard',
      loadChildren:()=>import('./admin-dashboard/admin-dashboard.module').then(m=>
        m.AdminDashboardModule)
    },
    {
      path:'customer',
      loadChildren:()=>import('./customer/customer.module').then(m=>
        m.CustomerModule)
    }
  ]
  // children:[
  //   {
  //     path:'admin-navbar',loadChildren:()=>import('./admin-navbar/admin-navbar.module').then(m=>
  //       m.AdminNavbarModule)
  //   }
  // ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
