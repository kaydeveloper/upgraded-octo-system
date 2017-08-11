import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * @Description: Services
 * @Author: Pardip Bhatti
 */
import { GpCheckTokenService } from './gp-check-token.service';

@Component({
  selector: 'app-check-token',
  template: 'Check token life'
})
export class GpCheckTokenComponent implements OnInit {

  constructor(private gpRouter: Router, private gpCheckToken: GpCheckTokenService) {}

  ngOnInit() {}

  gpCheckTokenValidation() {
    this.gpCheckToken.gpIfTokenIsInvalid().subscribe(gpTokenResponse => {
      if(gpTokenResponse.title !== undefined && gpTokenResponse.title === 'notAuthorized') {
        localStorage.clear();
        this.gpRouter.navigateByUrl('/');
      }

      return true;
    });
  }
}
