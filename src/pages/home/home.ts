import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';
import { LoginPage } from './../login/login';
import { Component, ModuleWithComponentFactories } from '@angular/core';
import { NavController, ModalController, AlertController, Events } from 'ionic-angular';
import * as moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {  
  eventList: FirebaseListObservable<any[]>;
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();
  oppositeView = 'week';
  name: string;

  calendar = {
    mode: 'month',
    currentDate: this.selectedDay,
  }
  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private alertCtrl: AlertController, public events: Events, public firebaseProvider: FirebaseProvider) {
    this.eventList = this.firebaseProvider.getEvents();
    this.navCtrl.push(LoginPage);
    this.events.subscribe('userName', (user) => {
      this.name = user;
      this.showAlert();
    });
  }
 
  removeItem(id) {
    this.firebaseProvider.removeEvent(id);
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Welcome!',
      subTitle: 'Welcome to SWEN325 app, <br>Dear '+this.name+'!',
      buttons: ['OK']
    });
    alert.present();
  }

  changeView(){
    if(this.calendar.mode == 'month'){
      this.calendar.mode = 'week';
      this.oppositeView = 'month';
    } else {
      this.calendar.mode = 'month';
      this.oppositeView = 'week';
    }
  }

  addEvent(){
    let modal = this.modalCtrl.create('EventModalPage', {selectedDay: this.selectedDay});
    modal.present();
    modal.onDidDismiss(data => {
      if(data){
        let eventData = data;
        eventData.startTime = new Date(data.startTime);
        eventData.endTime = new Date(data.endTime);

        let events = this.eventSource;
        events.push(eventData);
        this.eventSource = [];
        setTimeout(() => {
          this.eventSource = events;
        });
        this.firebaseProvider.addEvent(this.eventSource);
      }
    });
  }

  onViewTitleChanged(title){
    this.viewTitle = title;
  }

  onTimeSelected(ev){
    this.selectedDay = ev.selectedTime;
  }

  onEventSelected(event){
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');

    let alert = this.alertCtrl.create({
      title: '' + event.title,
      subTitle: 'From: ' + start + '<br>To: ' + end,
      buttons: [
        {
          text: 'Delete',
          handler: () => {

          }
        },
        {
          text: 'Edit',
          handler: () => {
            
          }
        },
        
        {
          text: 'OK',
          role: 'cancel'
        }
      ]
    });
    alert.present();
  }
}