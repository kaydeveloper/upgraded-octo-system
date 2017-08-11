import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { GpSharedService } from './gp-shared.service';

@Injectable()
export class GpAuthGuard implements CanActivate {

  /**
   * @Description: Router guard to protect the urls
   * @param gpRouter
   * @param gpAuth
   * @Author: Gurpreet Singh (Kaydeveloper)
   */
  constructor(private gpRouter: Router, private gpSharedService: GpSharedService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    /**
     * @Description: Checking user is logged in
     * @Author: Gurpreet Singh (Kaydeveloper)
     */
    return this.gpSharedService.gpIsLoggedIn();
  }
}
