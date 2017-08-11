import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

/**
 * @Description: Import service
 * @Author: Gurpreet Singh (Kaydeveloper)
 */
import { GpSharedService } from '../../gp-shared/gp-shared.service';

@Component({
  selector: 'app-gp-register',
  templateUrl: './gp-register.component.html',
  styleUrls: ['./gp-register.component.css']
})
export class GpRegisterComponent implements OnInit {
  /**
   * @Description: Declaration of variables
   * @Author: Gurpreet Singh (Kaydeveloper)
   */
  gpRegisterForm: FormGroup;
  gpFormData;
  gpUrl = "users"
  gpSpiner = false;

  /**
   * @Description: Declaration of variables
   * @param titleService
   * @param meta
   * @param gpFormBuilder
   * @param gpAuthService
   * @param gpRouter
   * @param gpFlashMessage
   * @Author: Gurpreet Singh (Kaydeveloper)
   */
  constructor(titleService: Title, meta: Meta, private gpFormBuilder: FormBuilder, private gpAuthService: GpSharedService, private gpRouter: Router, private gpFlashMessage: FlashMessagesService) {

    /**
     * @Description: Title and meta tags for each page
     * @Author: Gurpreet Singh (Kaydeveloper)
     */
    titleService.setTitle('GpCoders | Register');
    meta.addTags([
      { name: 'author',   content: 'Admin with bootstrap 4 and Angular 4'},
      { name: 'keywords', content: 'Angular 4, Angular 4 Admin, Typescript'},
      { name: 'description', content: 'Fully functional admin with bootstrap 4 and Angular 4' }
    ]);

    /**
     * @Description: Form Validations
     * @Author: Gurpreet Singh (Kaydeveloper)
     */
    this.gpRegisterForm = this.gpFormBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  /**
   * @Description: Init before view load
   * @Author: Gurpreet Singh (Kaydeveloper)
   */
  ngOnInit() {
    if(localStorage.getItem('gpToken')) {
        this.gpRouter.navigateByUrl('/dashboard');
      }
  }

  /**
   * @Description: Authorization function
   * @Author: Gurpreet Singh (Kaydeveloper)
   */
  gpRegister() {

    // @Spinner: set true
    this.gpSpiner = true;

    this.gpAuthService.gpSaveData(this.gpRegisterForm.value, this.gpUrl)
      .subscribe((res) => {

        if(res.error !== undefined && res.title !== undefined && res.title === 'errorOccoured') {
            this.gpSpiner = false;
            this.gpFlashMessage.show(res.error.message, { cssClass: 'alert-danger', timeout: 5000 } );
            return;
        }
        
        this.gpFlashMessage.show('You are registered successfully.', { cssClass: 'alert-success', timeout: 5000 } );
        this.gpRouter.navigateByUrl('/');
        this.gpSpiner = false;
      });
  }

}
