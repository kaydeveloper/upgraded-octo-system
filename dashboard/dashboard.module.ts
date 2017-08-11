import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

// @ Components
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { GpDashboardHomeComponent } from './gp-dashboard-home/gp-dashboard-home.component';
import { GpProfileComponent } from './gp-profile/gp-profile.component';
import { ViewProfileComponent } from './gp-profile/view-profile/view-profile.component';
import { EditProfileComponent } from './gp-profile/edit-profile/edit-profile.component';
import { EditProfileImageComponent } from './gp-profile/edit-profile-image/edit-profile-image.component';
import { GpProfileLeftBarComponent } from './gp-profile/edit-profile/gp-profile-left-bar/gp-profile-left-bar.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlashMessagesModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent, GpDashboardHomeComponent, GpProfileComponent, ViewProfileComponent, EditProfileComponent, EditProfileImageComponent, GpProfileLeftBarComponent],
  providers: []
})
export class DashboardModule { }
