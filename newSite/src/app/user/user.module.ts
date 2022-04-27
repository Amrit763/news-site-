import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { FooterComponent } from './footer/footer/footer.component';
import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    UsersComponent,
    DashboardComponent,
    FooterComponent,
    // NavbarComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  // providers:[NewsService]
})
export class UserModule { }
