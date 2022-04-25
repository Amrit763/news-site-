import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { FooterComponent } from './footer/footer/footer.component';
import { UserRoutingModule } from './user-routing.module';
import { UserServiceService } from './user-service/user-service.service';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    UsersComponent,
    DashboardComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers:[UserServiceService]
})
export class UserModule { }
