import { TabsPage } from './../pages/tabs/tabs';
import { ContactPage } from './../pages/contact/contact';
import { AboutPage } from './../pages/about/about';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { NgCalendarModule } from 'ionic2-calendar';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from './../providers/firebase/firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBIbx3Qbio-VoQkehTR5AZw3RJ7bOK9vfc",
  authDomain: "timetableapp-f78f3.firebaseapp.com",
  databaseURL: "https://timetableapp-f78f3.firebaseio.com",
  projectId: "timetableapp-f78f3",
  storageBucket: "timetableapp-f78f3.appspot.com",
  messagingSenderId: "908376482981"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AboutPage,
    ContactPage,
    TabsPage
  ],
  imports: [
    NgCalendarModule,
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AboutPage,
    ContactPage, 
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
