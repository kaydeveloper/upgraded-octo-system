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
   * @Author: Kaydeveloper Singh (Gagudeep)
   */
  gpLoggedIn;

  /**
   * @Description: Global function for component
   * @param gpAuthService
   * @Author: Kaydeveloper Singh (Gagudeep)
   */
  constructor(private gpAuthService: GpSharedService) {}

  /**
   * @Description: Life cycle hook that load before view
   * @Author: Kaydeveloper Singh (Gagudeep)
   */
  ngOnInit() {}
  /**
   * @Description: Check if user is logged in
   * @Author: Kaydeveloper Singh (Gagudeep)
   */
  gpIsLoggedIn() {
    return this.gpAuthService.gpIsLoggedIn();
  }
}
