import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {GpSharedService} from '../../../gp-shared/gp-shared.service';
import { GpCheckTokenService } from '../../../gp-shared/gp-check-token.service';


@Component({
  selector: 'app-gp-add-post',
  templateUrl: './gp-add-post.component.html',
  styleUrls: ['./gp-add-post.component.css']
})
export class GpAddPostComponent implements OnInit {

  gpPostForm: FormGroup;
  gpPostSlug;
  gpDescription;
  gpBaseUrl = "http://localhost:4200/#";
  gpPublishedUrl;
  gpCreatePostUrl = "posts/create"
  gpCreatePostBlurRequest = true;

  constructor(private gpFormBuilder: FormBuilder, private gpSharedService: GpSharedService, private gpCheckToken: GpCheckTokenService, private gpRouter: Router) { }

  ngOnInit() {
    this.gpPostForm = this.gpFormBuilder.group({
      gpTitle: [null, Validators.required],
      postSlug: [null, Validators.required]
    });
  }

  gpKeyupHandlerFunctionForDescription(data) {
      this.gpDescription = data;
  }

  gpCreatePostOnBlur() {

    if(this.gpPostForm.value.gpTitle === undefined) {
      console.log('empty field');
      return false;
    }

    if(this.gpCreatePostBlurRequest) {
      // Post Data
      const gpPostParams = {
        gpPostTitle: this.gpPostForm.value.gpTitle,
        gpPostSlug: this.gpPostForm.value.postSlug,
        gpPostPermalink: `${this.gpBaseUrl}/dashboard/posts/post/single/${this.gpPostSlug}`,
        gpPostType: 'gp-draft',
        gpPostDeleteStatus: 0,
        gpPostCreatedOn: new Date('YYYY-MM-DD')
      }
      this.gpSharedService.gpSaveData(gpPostParams, this.gpCreatePostUrl)
        .subscribe(gpResponse => {
          if(gpResponse.title !== undefined && gpResponse.title === 'errorOccoured') {
            console.log(gpResponse.title + '==' + gpResponse.error);
            return false;
          }
          // Saved as draft
          this.gpGetPermalink(gpResponse.gpPostPermalink);
          this.gpCreatePostBlurRequest = false;
        });
    }
  }

  gpPublishPost() {
    // Post Data
    const gpPostParams = {
      gpPostTitle: this.gpPostForm.value.gpTitle,
      gpPostSlug: this.gpPostForm.value.postSlug,
      gpPostDescription: this.gpDescription,
      gpPostPermalink: `${this.gpBaseUrl}/dashboard/posts/post/single/${this.gpPostSlug}`,
      gpPostType: 'gp-published',
      gpPostDeleteStatus: 0,
      gpPostCreatedOn: new Date('YYYY-MM-DD')
    }

    this.gpSharedService.gpSaveData(gpPostParams, this.gpCreatePostUrl)
    .subscribe(gpResponse => {
      if(gpResponse.title !== undefined && gpResponse.title === 'errorOccoured') {
        console.log(gpResponse.title + '==' + gpResponse.error);
        return false;
      }
      // Saved as draft
      this.gpGetPermalink(gpResponse.gpPostPermalink);
      setTimeout(() => {
        this.gpRouter.navigate(['dashboard', 'posts', 'post', 'single', gpResponse.gpPostSlug]);
      }, 2000);
    })
  }

  gpDraftPost() {
    // Post Data
    const gpPostParams = {
      gpPostTitle: this.gpPostForm.value.gpTitle,
      gpPostSlug: this.gpPostForm.value.postSlug,
      gpPostDescription: this.gpDescription,
      gpPostPermalink: `${this.gpBaseUrl}/dashboard/posts/post/single/${this.gpPostSlug}`,
      gpPostType: 'gp-draft',
      gpPostDeleteStatus: 0,
      gpPostCreatedOn: new Date('YYYY-MM-DD')
    }

    this.gpSharedService.gpSaveData(gpPostParams, this.gpCreatePostUrl)
    .subscribe(gpResponse => {
      if(gpResponse.title !== undefined && gpResponse.title === 'errorOccoured') {
        console.log(gpResponse.title + '==' + gpResponse.error);
        return false;
      }
      // Saved as draft
      this.gpGetPermalink(gpResponse.gpPostPermalink);
      setTimeout(() => {
        this.gpRouter.navigate(['dashboard', 'posts', 'post', 'single', gpResponse.gpPostSlug]);
      }, 2000)
    })
  }

  gpGetPermalink(permaLink) {
    return this.gpPublishedUrl = permaLink;
  }

  gpCreateSlug(gpPostTitle) {

      // @ Creating a slug
      let gpSplit = gpPostTitle
        .toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'-');

      // @ Passing value to slug field
      this.gpPostSlug = gpSplit;

  }
}
