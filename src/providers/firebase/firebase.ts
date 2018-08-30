import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
 
@Injectable()
export class FirebaseProvider {
 
  constructor(public afd: AngularFireDatabase) { }
 
  getEvents() {
    return this.afd.list("eventList");
  }
 
  addEvent(name) {
    this.afd.list("eventList").push(name);
  }
 
  removeEvent(id) {
    this.afd.list("eventList").remove(id);
  }
}