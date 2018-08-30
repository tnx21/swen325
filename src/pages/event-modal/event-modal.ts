import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-event-modal',
  templateUrl: 'event-modal.html',
})
export class EventModalPage {
  event = { startTime: new Date().toISOString(), endTime: new Date().toISOString()}

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private modalCtrl: ModalController) {
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    this.event.startTime = preselectedDate;
    this.event.endTime = preselectedDate;
  }

  save(){
    this.viewCtrl.dismiss(this.event);
  }

  cancel(){
    this.viewCtrl.dismiss(this.event);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventModalPage');
  }
}