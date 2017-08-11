import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// @ Import Modules
import { GpAuthModule } from './gp-auth/gp-auth.module';
import { GpHeaderComponent } from './gp-shared/gp-header/gp-header.component';
import { GpFooterComponent } from './gp-shared/gp-footer/gp-footer.component';
import { GpSidebarComponent } from './gp-shared/gp-sidebar/gp-sidebar.component';

/**
 * @Description: All services
 * @Author: Pardip Bhatti (Gagudeep)
 */
import { GpSharedService } from './gp-shared/gp-shared.service';
import { GpAuthGuard } from './gp-shared/gp-auth.guard';
import { GpRestrictGuard } from './gp-shared/gp-restrict.guard';
import { GpCheckTokenService } from './gp-shared/gp-check-token.service';

@NgModule({
  declarations: [
    AppComponent,
    GpHeaderComponent,
    GpFooterComponent,
    GpSidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    GpAuthModule,
    AppRoutingModule
  ],
  providers: [
    GpAuthGuard,
    GpRestrictGuard,
    GpSharedService,
    GpCheckTokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
