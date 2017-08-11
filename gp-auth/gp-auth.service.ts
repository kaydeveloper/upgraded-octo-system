import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class GpAuthService {
  /**
   * @Description: Global function
   * @param gpAfAuth
   * @Author: Pardip Bhatti
   */
    constructor(private gpAfAuth: AngularFireAuth) { }

  /**
   * @Description: Authorize user
   * @Author: Pardip Bhatti
   */
    gpAuthorize(gpEmail: string, gpPassword: string) {
      return new Promise((resolve, reject) => {
        this.gpAfAuth.auth.signInWithEmailAndPassword(gpEmail, gpPassword)
          .then(userData => resolve(userData),
          err => reject(err));
      });
    }
  /**
   * @Description: Authorize user
   * @Author: Pardip Bhatti
   */
    gpRegister(gpEmail: string, gpPassword: string) {
      return new Promise((resolve, reject) => {
        this.gpAfAuth.auth.createUserWithEmailAndPassword(gpEmail, gpPassword)
          .then(userData => resolve(userData),
            err => reject(err));
      });
    }

  /**
   * @Description: Check is user is logged in or not
   * @Author: Pardip Bhatti
   */
    gpIsLoggedIn() {
      return this.gpAfAuth.authState.map(auth => auth);
    }

  /**
   * @Description: Destroy firebase auth
   * @Author: Pardip Bhatti
   */
    gpLogout() {
      return this.gpAfAuth.auth.signOut();
    }
}
