import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * @Description: Services & Comonents
 * @Author: Gurpreet Singh
 */
import { GpCheckTokenService } from '../../../../gp-shared/gp-check-token.service';
import { GpSharedService } from '../../../../gp-shared/gp-shared.service';

@Component({
  selector: 'app-gp-profile-left-bar',
  templateUrl: './gp-profile-left-bar.component.html',
  styleUrls: ['./gp-profile-left-bar.component.css']
})
export class GpProfileLeftBarComponent implements OnInit {

  /**
   * @Description: Variable declarations
   * @Author: Gurpreet Singh
   */
    gpSingleUrl = "users/single";
    gpGetProfileLoader = false;
    gpProfileData = {}

  /**
   * @Description: Global function
   * @Author: Gurpreet Singh
   */
    constructor(private gpSharedService: GpSharedService, private gpCheckToken: GpCheckTokenService, private gpRouter: Router) {}

  /**
   * @Description: Life cycle hook
   * @Author: Gurpreet Singh
   */
    ngOnInit() {
    /**
     * @Description: Check token is valid or not
     * Author: Gurpreet Singh (Kaydeveloper)
     */
      this.gpCheckToken.gpIfTokenIsInvalid().subscribe(gpTokenResponse => {
        if(gpTokenResponse.title !== undefined && gpTokenResponse.title === 'notAuthorized') {
          localStorage.clear();
          this.gpRouter.navigateByUrl('/');
        }
      });

    this.gpGetUser();
    }

  /**
   * @Description: Get user
   * @Author: Gurpreet Singh
   */
    gpGetUser() {
      //@Loader: true
      this.gpGetProfileLoader = true;

      this.gpSharedService.gpSingleData(localStorage.getItem('gpId'), this.gpSingleUrl).subscribe(
        gpResponse => {
          // Check if data not found
          if (gpResponse.error !== undefined && gpResponse.title !== undefined && gpResponse.title === 'errorOccured') {
            console.log('No data found for this user');
            return false;
          }
          // Checking token
          console.log(gpResponse);
          this.gpProfileData = gpResponse;
          //@Loader: false
          this.gpGetProfileLoader = false;
        },
        error => {
          console.log(error);
        }
      );
    }

}
