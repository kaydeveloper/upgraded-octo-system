import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class GpRestrictGuard implements CanActivate {

  /**
   * @Description: Router guard to protect the urls
   * @param gpRouter
   * @param gpAuth
   * @Author: Pardip Bhatti (Gagudeep)
   */
  constructor(private gpRouter: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    /**
     * @Description: Checking login from Firebase. if user is authorize then process
     * @Author: Pardip Bhatti (Gagudeep)
     */
    return true;
  }
}

