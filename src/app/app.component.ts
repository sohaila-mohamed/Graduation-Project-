import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DatastorageService } from './services/datastorage/datastorage.service';
import { NavigationService } from './home/NavService/navigation.service';
import { DatastreamingService } from './services/datastream/datastreaming.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  searching:string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar, 
    private datastore: DatastorageService,
    private nav : NavigationService,
    private datastream : DatastreamingService,
  ) {
    this.initializeApp();
  }
  navigate =
  [
    {
      title : "Home",
      url   : "home",
      icon  : "home"
    },
    {
      title : "Chat",
      url   : "home/profile",
      icon  : "chatboxes"
    },
    {
      title : "Contacts",
      url   : "/contacts",
      icon  : "contacts"
    },
  ]

   initializeApp() {
  //   this.platform.ready().then( () => {
      
  //     var that = this;
  //      this.datastore.isTokenExpired().then(async isTokenExpired =>
  //       {
  //         console.log("isTokenExpired: "+ isTokenExpired);
  //         if(!isTokenExpired)
  //         {
  //           console.log(" app compoennt :: Token isnot expired:  "+isTokenExpired);
  //           await this.datastore.getMyPatientData().then((patient)=>{
  //                that.datastream.SetPatientforLogin(patient);
  //           })
  //           await this.datastore.getPatientToken().then((token)=>{
  //             that.datastream.setToken(token);
  //        })
            this.nav.navigateTo('home');
            
  //         }
  //       });
     
      this.statusBar.styleDefault();
      this.splashScreen.hide();
     
    

  //   });
  }
  vitalClick(){
    this.nav.navigateTo('home/vitals');

  }
  homeClick(){
    this.nav.navigateTo('home');

  }
  dlistClick(){
    this.nav.navigateTo('home/profile');

  }
  tlistClick(){
    this.nav.navigateTo('home/patient');
    console.log("trainer list")
  }
  outClick(){
    this.nav.navigateTo('cover');

  }
  typing(){
    console.log(this.searching)
  }
}
