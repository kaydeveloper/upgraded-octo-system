import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

/**
 * @Description: Services & Comonents
 * @Author: Pardip Bhatti
 */
import { GpCheckTokenService } from '../../../gp-shared/gp-check-token.service';
import { GpSharedService } from '../../../gp-shared/gp-shared.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  gpEditProfileForm: FormGroup;
  gpUpdateUrl = "users/update";
  gpSingleUrl = "users/single";
  gpGetProfileLoader = false;
  findLatLong = false;

  constructor(private gpSharedService: GpSharedService, private gpFormBuilder: FormBuilder, private gpCheckToken: GpCheckTokenService, private gpRouter: Router, private gpFlashMessage: FlashMessagesService) {

  }

  ngOnInit() {
    this.gpCheckToken.gpIfTokenIsInvalid().subscribe(gpTokenResponse => {
      if(gpTokenResponse.title !== undefined && gpTokenResponse.title === 'notAuthorized') {
        localStorage.clear();
        this.gpRouter.navigateByUrl('/');
      }
    });

    this.gpEditProfileForm = this.gpFormBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      skype: [null, Validators.required],
      tagLine : [null, Validators.required],
      address : [null, Validators.required],
      facebook : [null, Validators.required],
      twitter : [null, Validators.required],
      google : [null, Validators.required],
      latitude : [null, Validators.required],
      longitude : [null, Validators.required]
    });

    this.gpGetUser();
  }

  gpCheckValidityOfToken() {
    this.gpCheckToken.gpIfTokenIsInvalid().subscribe(gpTokenResponse => {
      if(gpTokenResponse.title !== undefined && gpTokenResponse.title === 'notAuthorized') {
        localStorage.clear();
        this.gpRouter.navigateByUrl('/');
      }
    });
  }


  gpUpdateUser() {

    //@ Check token validity
    this.gpCheckValidityOfToken();

    //@Loader: true
    this.gpGetProfileLoader = true;
    this.gpSharedService.gpUpdateData(localStorage.getItem('gpId'), this.gpEditProfileForm.value, this.gpUpdateUrl)
    .subscribe(gpResponse => {
      console.log(gpResponse);
      if(gpResponse.error !== undefined && gpResponse.title === 'errorOccured') {
            this.gpFlashMessage.show(gpResponse.error.message, { cssClass: 'alert-danger', timeout: 3000 } );
            //@Loader: false
            this.gpGetProfileLoader = false;
            return;
          }
          //this.gpFlashMessage.show(gpResponse.message, { cssClass: 'alert-success', timeout: 3000 } );

          //@Loader: false
          this.gpGetProfileLoader = false;
    });
  }


  gpGetUser() {
    //@ Check token validity
    this.gpCheckValidityOfToken();

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

        //@Loader: false
        this.gpGetProfileLoader = false;

        this.gpEditProfileForm.patchValue({firstName: gpResponse.firstName});
        this.gpEditProfileForm.patchValue({lastName: gpResponse.lastName});
        this.gpEditProfileForm.patchValue({email: gpResponse.email});
        this.gpEditProfileForm.patchValue({phone: gpResponse.phone});
        this.gpEditProfileForm.patchValue({skype: gpResponse.skype});
        this.gpEditProfileForm.patchValue({tagLine: gpResponse.tagLine});
        this.gpEditProfileForm.patchValue({address: gpResponse.address});
        this.gpEditProfileForm.patchValue({google: gpResponse.google});
        this.gpEditProfileForm.patchValue({facebook: gpResponse.facebook});
        this.gpEditProfileForm.patchValue({twitter: gpResponse.twitter});
        this.gpEditProfileForm.patchValue({latitude: gpResponse.latitude});
        this.gpEditProfileForm.patchValue({longitude: gpResponse.longitude});
        this.gpEditProfileForm.updateValueAndValidity();

      },
      error => {
        console.log(error);
      }
    );
  }

  getLocation() {

    this.findLatLong = true;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showLatLong);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  showLatLong(position) {
    (<HTMLInputElement>document.getElementById('lat')).value = position.coords.longitude;
    (<HTMLInputElement>document.getElementById('long')).value = position.coords.longitude;
  }



}
