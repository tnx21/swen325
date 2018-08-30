import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public events:Events) {
  }

  enterBtn(user:string){
    this.events.publish('userName', user);
    this.navCtrl.pop();
  }
}
