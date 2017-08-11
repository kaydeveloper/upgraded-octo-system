import { Component, OnInit } from '@angular/core';
import { GpUsersService } from './gp-users.service';
import { Client } from './models/Client';



@Component({
  selector: 'app-gp-users',
  templateUrl: './gp-users.component.html',
  styleUrls: ['./gp-users.component.css']
})
export class GpUsersComponent implements OnInit {

  gpClients: Client[];

  constructor(public gpClientService: GpUsersService) { }

  ngOnInit() {}

}
