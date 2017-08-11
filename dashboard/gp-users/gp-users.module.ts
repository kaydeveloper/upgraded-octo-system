import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GpUsersRoutingModule } from './gp-users-routing.module';
import { GpUsersComponent } from './gp-users.component';


import { GpAddUsersComponent } from './gp-add-users/gp-add-users.component';

@NgModule({
  imports: [
    CommonModule,
    GpUsersRoutingModule
  ],
  declarations: [GpUsersComponent, GpAddUsersComponent],
  providers: []
})
export class GpUsersModule { }
