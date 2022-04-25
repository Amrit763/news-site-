import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';

const routes: Routes = [{
  path:'',
  component:AdminNavbarComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminNavbarRoutingModule { }
