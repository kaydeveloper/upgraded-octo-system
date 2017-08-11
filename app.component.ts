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
   * @Author: Gurpreet Singh (Kaydeveloper)
   */
  gpLoggedIn;

  /**
   * @Description: Global function for component
   * @param gpAuthService
   * @Author: Gurpreet Singh (Kaydeveloper)
   */
  constructor(private gpAuthService: GpSharedService) {}

  /**
   * @Description: Life cycle hook that load before view
   * @Author: Gurpreet Singh (Kaydeveloper)
   */
  ngOnInit() {}
  /**
   * @Description: Check if user is logged in
   * @Author: Gurpreet Singh (Kaydeveloper)
   */
  gpIsLoggedIn() {
    return this.gpAuthService.gpIsLoggedIn();
  }
}
