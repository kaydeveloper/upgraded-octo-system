import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Client } from './models/client';

@Injectable()
export class GpUsersService {


  constructor(public gpAf: AngularFireDatabase, private gpAfAuth: AngularFireAuth) {

  }

  getClients() {
     //return  this.gpAf.list('/users') as FirebaseListObservable<Client[]>;
  }

  gpUpdateProfile(gpFormData) {
    const gpCurrentUser =  this.gpAfAuth.auth.currentUser.uid;
    return this.gpAf.object(`/users/${gpCurrentUser}`).update(gpFormData);
  }

  getSingleUser() {
    const gpCurrentUser =  this.gpAfAuth.auth.currentUser.uid;
    return this.gpAf.object(`/users/${gpCurrentUser}`) as FirebaseObjectObservable<any>;
  }

}
