import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GpUsersComponent } from './gp-users.component';
import { GpAddUsersComponent } from './gp-add-users/gp-add-users.component';

const routes: Routes = [
  { path: '', component: GpUsersComponent },
  { path: 'users', component: GpUsersComponent },
  { path: 'add-user', component: GpAddUsersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GpUsersRoutingModule { }
