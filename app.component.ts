import {Component, OnInit} from '@angular/core';
import { GpSharedService } from './gp-shared/gp-shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /**
   * @Description: Declaration of variables
   * @Author: Pardip Bhatti (Gagudeep)
   */
  gpLoggedIn;

  /**
   * @Description: Global function for component
   * @param gpAuthService
   * @Author: Pardip Bhatti (Gagudeep)
   */
  constructor(private gpAuthService: GpSharedService) {}

  /**
   * @Description: Life cycle hook that load before view
   * @Author: Pardip Bhatti (Gagudeep)
   */
  ngOnInit() {}
  /**
   * @Description: Check if user is logged in
   * @Author: Pardip Bhatti (Gagudeep)
   */
  gpIsLoggedIn() {
    return this.gpAuthService.gpIsLoggedIn();
  }
}
