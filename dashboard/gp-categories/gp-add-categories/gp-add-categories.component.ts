import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {GpSharedService} from '../../../gp-shared/gp-shared.service';
import { GpCheckTokenService } from '../../../gp-shared/gp-check-token.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-gp-add-categories',
  templateUrl: './gp-add-categories.component.html',
  styleUrls: ['./gp-add-categories.component.css']
})
export class GpAddCategoriesComponent implements OnInit, AfterViewInit {

  gpAddCategoryForm: FormGroup;
  gpCatSlug;
  gpCreateCatUrl = 'categories/create';
  gpAllCatUrl = 'categories/all';
  gpDeleteCatUrl = 'categories/remove';
  gpAllCatData = [];
  saveCatSpinner = false;
  page: number = 1;

  constructor(private gpFormBuilder: FormBuilder, private gpSharedService: GpSharedService, private gpCheckToken: GpCheckTokenService, private gpRouter: Router) { }

  ngOnInit() {

    this.gpCheckToken.gpIfTokenIsInvalid().subscribe(gpTokenResponse => {
      if(gpTokenResponse.title !== undefined && gpTokenResponse.title === 'notAuthorized') {
        localStorage.clear();
        this.gpRouter.navigateByUrl('/');
      }
    });


    this.gpAddCategoryForm = this.gpFormBuilder.group({
      gpCatName: [null, Validators.required],
      gpCatSlug: [null, Validators.required]
    })
  }

  ngAfterViewInit() {
    this.gpFetchAllCats();
  }



  gpCheckValidityOfToken() {
    this.gpCheckToken.gpIfTokenIsInvalid().subscribe(gpTokenResponse => {
      if(gpTokenResponse.title !== undefined && gpTokenResponse.title === 'notAuthorized') {
        localStorage.clear();
        this.gpRouter.navigateByUrl('/');
      }
    });
  }

  /**
   * @Description: Creating slug for category
   * @Author: Pardip Bhatti (Gagudeep)
   */
    gpCreateSlug(gpCatTitle) {

      // @ Creating a slug
      let gpSplit = gpCatTitle
        .toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'-');

      // @ Passing value to slug field
      this.gpCatSlug = gpSplit;
    }

    /**
     * @Description: Creating slug for category
     * @Author: Pardip Bhatti (Gagudeep)
     */
      gpSaveCategory() {
      /**
       * @Description: Check user authentication
       */
      this.gpCheckValidityOfToken();

      /**
       * @Spinner: true
       */
        this.saveCatSpinner = true;

      this.gpSharedService.gpSaveData(this.gpAddCategoryForm.value, this.gpCreateCatUrl)
            .subscribe(gpResponse => {
              if(gpResponse.title !== undefined && gpResponse.title === 'errorOccoured') {
                console.log(gpResponse.title + '==' + gpResponse.error);
                return false;
              }
              /**
               * @Spinner: true
               */
              this.saveCatSpinner = false;
              this.gpFetchAllCats();
            });
      }

     /**
     * @Description: Fetching all cats
     * @Author: Pardip Bhatti (Gagudeep)
     */
      gpFetchAllCats() {
      /**
       * @Description: Check user authentication
       */
      this.gpCheckValidityOfToken();

          this.gpSharedService.gpAllData(this.gpAllCatUrl)
            .subscribe(gpResponse => {
              if(gpResponse.error !== undefined && gpResponse.title === undefined && gpResponse.title === 'errorOccoured') {
                console.log(gpResponse.title + '==' + gpResponse.error);
                return false;
              }
              this.gpAllCatData = gpResponse.cats;
              this.gpAddCategoryForm.reset();
            });
      }

     /**
     * @Description: Remove category
     * @Author: Pardip Bhatti (Gagudeep)
     */
     gpRemoveCategory(gpCatId) {
      /**
       * @Description: Check user authentication
       */
      this.gpCheckValidityOfToken();
          this.gpSharedService.gpRemoveSingle(gpCatId, this.gpDeleteCatUrl)
            .subscribe(gpResponse => {
              if(gpResponse.error !== undefined && gpResponse.title === undefined && gpResponse.title === 'errorOccoured') {
                console.log(gpResponse.title + '==' + gpResponse.error);
                return false;
              }
              this.gpFetchAllCats();
            });
      }

}
