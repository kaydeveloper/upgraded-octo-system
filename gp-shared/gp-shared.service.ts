import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class GpSharedService {

 /**
   * @Description: Variables declaration
   * @Author: Pardip Bhatti (Gagudeep)
   */
    // private  gpHeaders = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    private  gpHeaders = new Headers({'Content-Type': 'application/json'});
    private  gpUrl = 'http://localhost:3000';


  /**
   * @Description: Constructor
   * @Author: Pardip Bhatti (Gagudeep)
   */
    constructor(private gpHttp: Http) { }

  /**
   * @Description: Saving data to server
   * @Author: Pardip Bhatti (Gagudeep)
   */
    gpSaveData(gpData, url): Observable<any> {
      return this.gpHttp.post(`${this.gpUrl}/${url}`, JSON.stringify(gpData), { headers: this.gpHeaders })
        .map(this.extractData)
        .catch(this.gpHandleErrors);
    }

   /**
   * @Description: Saving data to server
   * @Author: Pardip Bhatti (Gagudeep)
   */
    gpUpdateData(gpId, gpData, url): Observable<any> {
      return this.gpHttp.put(`${this.gpUrl}/${url}/${gpId}`, JSON.stringify(gpData), { headers: this.gpHeaders })
        .map(this.extractData)
        .catch(this.gpHandleErrors);
    }


  /**
   * @Description: Get Single row
   * @Author: Pardip Bhatti (Gagudeep)
   */
    gpSingleData(gpId, url): Observable<any> {
      return this.gpHttp.get(`${this.gpUrl}/${url}/${gpId}`, { headers: this.gpHeaders })
        .map(this.extractData)
        .catch(this.gpHandleErrors);
    }

  /**
   * @Description: Get all rows
   * @Author: Pardip Bhatti (Gagudeep)
   */
    gpAllData(url): Observable<any> {
      return this.gpHttp.get(`${this.gpUrl}/${url}`, { headers: this.gpHeaders })
        .map(this.extractData)
        .catch(this.gpHandleErrors);
    }

  /**
   * @Description: Check if user exist
   * @Author: Pardip Bhatti (Gagudeep)
   */
    gpCheckExistData(gpData, url): Observable<any> {
      return this.gpHttp.post(`${this.gpUrl}/${url}`, gpData, { headers: this.gpHeaders })
        .map(this.extractData)
        .catch(this.gpHandleErrors);
    }

  /**
   * @Description: Remove single row
   * @Author: Pardip Bhatti (Gagudeep)
   */
    gpRemoveSingle(gpId, url): Observable<any> {
      return this.gpHttp.delete(`${this.gpUrl}/${url}/${gpId}`, { headers: this.gpHeaders })
        .map(this.extractData)
        .catch(this.gpHandleErrors);
    }

  /**
   * @Description: Image
   * @Author: Pardip Bhatti (Gagudeep)
   */
    gpGetImageAndFormData(params, files, url) {
      return this.gpPostImagesAndData(`${this.gpUrl}/${url}`, params, files);
    }


  /**
   * Description: Processing image upload
   * Author: Pardip Bhatti (Gagudeep)
   * Date: 10 July, 2017
   * Usage of file upload

     gpFileToUpload: Array<File>; // @ Declare array variable in component

     fileChangeEvent(fileInput: any) {    // @ call this function on change of file
       this.gpFileToUpload = fileInput.target.files;  // @ pass image to array variable
       this.gpImageName = this.gpFileToUpload[0].name;
     }

     <input type="file" (change)="fileChangeEvent($event)" />  // @ use above function as this

     this.gpSharedService.gpGetImageAndFormData('user-id', this.gpFileToUpload) // @ user service to send data

   */
    gpPostImagesAndData(url: string, params: any, files: any) {
      return new Promise<any>((resolve, reject) => {
        const formData: any = new FormData();     // Form data object
        const xhr = new XMLHttpRequest();         // XHR for post data

        // @ Check if file is not undefined and empty
        if (params !== undefined && params.length !== 0) {
          // @ Send all params or form data here
          for (const keys in params) {
            formData.append(keys, params[keys]);
          }
        }

        // @ Check if file is not undefined and empty
        if (files !== undefined && files !== '' && files.length !== 0) {
          // @ Images append to form data
          formData.append('gpCatImage', files[0], files[0].name);
        }

        // @ Response
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              resolve(JSON.parse(xhr.response));
            } else {
              reject(xhr.response);
            }
          }
        }
        xhr.open('POST', url, true);
        xhr.send(formData);
      });
    }

  /**
   * @Description: Authenticating user
   * @Author: Pardip Bhatti (Gagudeep)
   */
    gpAuthenication(gpData, url): Observable<any> {
      return this.gpHttp.post(`${this.gpUrl}/${url}`, gpData, { headers: this.gpHeaders })
        .map(this.extractData)
        .catch(this.gpHandleErrors);
    }

  /**
   * @Description: If user is logged in
   * @Author: Pardip Bhatti (Gagudeep)
   */
    gpIsLoggedIn() {
      if (localStorage.getItem('gpToken')) {
        return true;
      }
    }

  /**
   * @Description: Destroy Auth
   * @Author: Pardip Bhatti (Gagudeep)
   */
    gpDestroyAuth() {
      if (localStorage.getItem('gpToken')) {
        localStorage.clear();
      }
    }

  /**
   * @Description: Extracting data if not null
   * @Author: Pardip Bhatti (Gagudeep)
   */
    private extractData(res: Response) {
      return res.text() ? res.json() : {}; ;
    }

  /**
   * @Description: Handling errors
   * @Author: Pardip Bhatti (Gagudeep)
   */
    private gpHandleErrors(error: any): Promise<any> {
      console.log('An error occurred', error);
      return Promise.reject(error.message || error);
    }

}
