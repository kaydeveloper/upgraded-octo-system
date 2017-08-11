import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * @Description: Import all custom componentes
 * @Author: Gurpreet Singh
 */
import { DashboardComponent } from './dashboard.component';
import { GpDashboardHomeComponent } from './gp-dashboard-home/gp-dashboard-home.component';
import { GpProfileComponent } from './gp-profile/gp-profile.component';
import { ViewProfileComponent } from './gp-profile/view-profile/view-profile.component';
import { EditProfileComponent } from './gp-profile/edit-profile/edit-profile.component';
import { EditProfileImageComponent } from './gp-profile/edit-profile-image/edit-profile-image.component';

/**
 * @Description: Import all custom services
 * @Author: Gurpreet Singh
 */
import { GpAuthGuard } from '../gp-shared/gp-auth.guard';

/**
 * @Description: Routes for dashboard
 * @type {[{path: string; component: DashboardComponent; children: [{path: string; component: GpDashboardHomeComponent},{path: string; component: GpProfileComponent; children: [{path: string; redirectTo: string; pathMatch: string},{path: string; component: ViewProfileComponent},{path: string; component: EditProfileComponent},{path: string; component: EditProfileImageComponent}]},{path: string; loadChildren: string},{path: string; loadChildren: string}]}]}
 * @Author: Gurpreet Singh
 */

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [GpAuthGuard] , children: [
    { path: '', component: GpDashboardHomeComponent, canActivate: [GpAuthGuard] },
    { path: 'profile', component: GpProfileComponent, children: [
      { path: '', redirectTo: 'view-profile', canActivate: [GpAuthGuard], pathMatch: 'full' },
      { path: 'view-profile', component:  ViewProfileComponent, canActivate: [GpAuthGuard] },
      { path: 'edit-profile', component:  EditProfileComponent, canActivate: [GpAuthGuard] },
      { path: 'edit-profile-image', component:  EditProfileImageComponent, canActivate: [GpAuthGuard] },
    ] },
    { path: 'categories', loadChildren: 'app/dashboard/gp-categories/gp-categories.module#GpCategoriesModule' , canActivate: [GpAuthGuard] },
    { path: 'posts', loadChildren: 'app/dashboard/gp-post/gp-post.module#GpPostModule', canActivate: [GpAuthGuard] },
    { path: 'users', loadChildren: 'app/dashboard/gp-users/gp-users.module#GpUsersModule', canActivate: [GpAuthGuard] }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
