import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// @ Components
import { GpLoginComponent } from './gp-auth/gp-login/gp-login.component';
import { GpRegisterComponent } from './gp-auth/gp-register/gp-register.component';
import { GpForgotPasswordComponent } from './gp-auth/gp-forgot-password/gp-forgot-password.component';

/**
 * @Description: Import all custom services
 * @Author: Pardip Bhatti
 */
import { GpAuthGuard } from './gp-shared/gp-auth.guard';
import { GpRestrictGuard } from './gp-shared/gp-restrict.guard';

// @ Routes
const routes: Routes = [
  { path: '', component: GpLoginComponent, canActivate: [GpRestrictGuard] },
  { path: 'login', component: GpLoginComponent, canActivate: [GpRestrictGuard] },
  { path: 'register', component: GpRegisterComponent },
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule', canActivate: [GpAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
