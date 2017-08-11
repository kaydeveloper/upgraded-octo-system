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
  selector: 'app-gp-login',
  templateUrl: './gp-login.component.html',
  styleUrls: ['./gp-login.component.css']
})
export class GpLoginComponent implements OnInit {
  /**
   * @Description: Declaration of variables
   * @Author: Gurpreet Singh (Kaydeveloper)
   */
    gpAuthForm: FormGroup;
    gpFormData;
    gpUrl = 'users/login';
    gpSpiner = false

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
      titleService.setTitle('GpCoders | Login');
      meta.addTags([
        { name: 'author',   content: 'Admin with bootstrap 4 and Angular 4'},
        { name: 'keywords', content: 'Angular 4, Angular 4 Admin, Typescript'},
        { name: 'description', content: 'Fully functional admin with bootstrap 4 and Angular 4' }
      ]);

      /**
       * @Description: Form Validations
       * @Author: Gurpreet Singh (Kaydeveloper)
       */
      this.gpAuthForm = this.gpFormBuilder.group({
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
    gpAuthorization() {
      //@Spiner : True
      this.gpSpiner = true;
      const gpFormdata = {
        email: this.gpAuthForm.value.email,
        password: this.gpAuthForm.value.password
      }
      this.gpAuthService.gpAuthenication(gpFormdata, this.gpUrl)
        .subscribe((res) => {
          if(res.error !== undefined && res.title === 'errorOccured') {
            this.gpFlashMessage.show(res.error.message, { cssClass: 'alert-danger', timeout: 3000 } );  
            //@Spiner : False
            this.gpSpiner = false;
            return;
          }

          // @Login Success
          this.gpFlashMessage.show(res.message, { cssClass: 'alert-success', timeout: 3000 } );
          
          //@localStorage: Setting localstorage
          localStorage.setItem('gpToken', res.token);
          localStorage.setItem('gpId', res.userId);

          //@ Redirect to dashboard 
          this.gpRouter.navigateByUrl('/dashboard');
          //@Spiner : False
          this.gpSpiner = false;
        })
    }
}
