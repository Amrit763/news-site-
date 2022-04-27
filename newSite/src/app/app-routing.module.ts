import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'user/politics',
    pathMatch:'full'
  },{
    path:'user',
    loadChildren:()=> import('./user/user.module').then(m=>
      m.UserModule)
  },{
    path:'shared',
    loadChildren:()=> import('./shared/shared.module').then(m=>
      m.SharedModule)
  },{
    path:'admin',
    loadChildren:()=> import('./admin/admin.module').then(m=>
      m.AdminModule)
  },
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then(m=>
      m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
