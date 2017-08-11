import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class GpCheckTokenService {

   /**
   * @Description: Variables declaration
   * @Author: Kaydeveloper Singh (Gagudeep)
   */
    // private  gpHeaders = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    private  gpHeaders = new Headers({'Content-Type': 'application/json'});
    private  gpUrl = 'http://localhost:3000/api';

  /**
   * @Description: Constructor
   * @Author: Kaydeveloper Singh (Gagudeep)
   */
    constructor(private gpRouter: Router, private gpHttp: Http) { }

  /**
   * @Description: Check if token is invalid
   * @Author: Kaydeveloper Singh (Gagudeep)
   */
    gpIfTokenIsInvalid() {
        const gpToken = (localStorage.getItem('gpToken')) ? localStorage.getItem('gpToken') : 'null';
        return this.gpHttp.get(`${this.gpUrl}/${gpToken}`, { headers: this.gpHeaders })
        .map(this.extractData)
    }

    /**
   * @Description: Extracting data if not null
   * @Author: Kaydeveloper Singh (Gagudeep)
   */
    private extractData(res: Response) {
      return res.text() ? res.json() : {}; ;
    }

}
