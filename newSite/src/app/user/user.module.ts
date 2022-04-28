import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavFooterComponent } from './layout/nav-footer/nav-footer.component';
import { NavHeaderComponent } from './layout/nav-header/nav-header.component';
import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    UsersComponent,
    // DashboardComponent,
    NavFooterComponent,
    NavHeaderComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  // providers:[NewsService]
})
export class UserModule { }
