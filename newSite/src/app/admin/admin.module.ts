import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import {
  AdminNavbarComponent,
} from './admin-navbar/admin-navbar/admin-navbar.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdminServiceService } from './adminService/admin-service.service';

@NgModule({
  declarations: [
    AdminComponent,
    AdminNavbarComponent //yo admin component ma rakhecha <app-adminnav> vanera vani chahincha
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  providers:[AdminServiceService]
})
export class AdminModule { }
