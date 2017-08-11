import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * @Description: Import service
 * @Author: Pardip Bhatti (Gagudeep)
 */
import { GpSharedService } from '../gp-shared.service';
import { GpCheckTokenService } from '../gp-check-token.service';

@Component({
  selector: 'app-gp-header',
  templateUrl: './gp-header.component.html',
  styleUrls: ['./gp-header.component.css']
})
export class GpHeaderComponent implements OnInit {

  /**
   * @Description: Declaration of variables
   * @Author: Pardip Bhatti (Gagudeep)
   */
   gpSingleProfile = 'users/single'   
   gpName; 

  /**
   * @Description: Import all custom services
   * @param gpAuthService
   * @param gpRouter
   * @Author: Pardip Bhatti (Gagudeep)
   */
  constructor(private gpRouter: Router, private gpAuthService: GpSharedService, private gpCheckToken: GpCheckTokenService) { }

  /**
   * @Description: Init before view load
   * @Author: Pardip Bhatti (Gagudeep)
   */
  ngOnInit() {
    this.gpCheckToken.gpIfTokenIsInvalid().subscribe(gpTokenResponse => {
      if(gpTokenResponse.title !== undefined && gpTokenResponse.title === 'notAuthorized') {
        localStorage.clear();
        this.gpRouter.navigateByUrl('/');
      }
    });
    //@ If token is valid then proceed
    this.gpGetProfile();
  }

  /**
   * @Description: Authorization function
   * @Author: Pardip Bhatti (Gagudeep)
   */
    gpGetProfile() {
      if(localStorage.getItem('gpId')) {
        this.gpAuthService.gpSingleData(localStorage.getItem('gpId'), this.gpSingleProfile)
        .subscribe(gpSingleResponse => {
            // Check if data not found
            if (gpSingleResponse.error !== undefined && gpSingleResponse.title !== undefined && gpSingleResponse.title === 'errorOccured') {
              console.log('No data found for this user');
              return false;
            }

            //@ Else set local storage variable
            this.gpName = `${gpSingleResponse.firstName} ${gpSingleResponse.lastName}`;
        });
      }
    }

  /**
   * @Description: Authorization function
   * @Author: Pardip Bhatti (Gagudeep)
   */
  gpAuthLogout() {
    localStorage.clear();
    this.gpRouter.navigateByUrl('/');
  }

}