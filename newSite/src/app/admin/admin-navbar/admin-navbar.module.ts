import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminNavbarRoutingModule } from './admin-navbar-routing.module';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';

@NgModule({
  declarations: [
    AdminNavbarComponent,
  ],
  imports: [
    CommonModule,
    AdminNavbarRoutingModule
  ]
})
export class AdminNavbarModule { }
