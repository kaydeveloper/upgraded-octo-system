import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterModule } from '@angular/router';

// @ Components
import { GpLoginComponent } from './gp-login/gp-login.component';
import { GpRegisterComponent } from './gp-register/gp-register.component';
import { GpForgotPasswordComponent } from './gp-forgot-password/gp-forgot-password.component';

/**
 * @Description: Import service
 * @Author: Kaydeveloper Singh (Gagudeep)
 */
import { GpAuthService } from './gp-auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    FlashMessagesModule
  ],
  declarations: [GpLoginComponent, GpRegisterComponent, GpForgotPasswordComponent],
  providers: [GpAuthService]
})
export class GpAuthModule { }
