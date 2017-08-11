import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

/**
 * @Description: Services & Comonents
 * @Author: Kaydeveloper Singh
 */
import { GpCheckTokenService } from '../../gp-shared/gp-check-token.service';
import { GpSharedService } from '../../gp-shared/gp-shared.service';

@Component({
  selector: 'app-gp-profile',
  templateUrl: './gp-profile.component.html',
  styleUrls: ['./gp-profile.component.css']
})
export class GpProfileComponent implements OnInit {

  gpUpdateUrl = "users/update";
  gpSingleUrl = "users/single";
  gpGetProfileLoader = false;
  constructor(private gpSharedService: GpSharedService, private gpCheckToken: GpCheckTokenService, private gpRouter: Router, private gpFlashMessage: FlashMessagesService) {}

  ngOnInit() {}

}
