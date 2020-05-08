import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationService} from '../NavService/navigation.service';
import {DatastreamingService} from '../../services/datastream/datastreaming.service';
import {HttpService} from '../HttPService/http.service';
import {AlertController} from '@ionic/angular';
import {InteractionService} from '../../services/datacommunication/interaction.service';
import {doctorData} from '../../model/doctorData';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.scss'],
})
export class DoctorProfileComponent implements OnInit,OnDestroy{
  private FreeTimes:number[]=[0,1,2,4,5,6,7,8];
  private docData:doctorData;
  private spinnerState:boolean=true;
  constructor(private navigation:NavigationService,
              private datastream: DatastreamingService,
              private dataShare:InteractionService,
              private addController: AlertController

  ) {
    console.log(this.FreeTimes);
    console.log("profile constructed");

  }

  ngOnInit() {
    console.log("Profile component Initiated");
    new Promise((resolve, reject) => {
      this.docData=this.dataShare.getDoctorData();
      if(this.docData==undefined){
       // this.presentAlert('Data Interaction Error','doctor data undefined');
        reject('doctor data undefined');

      }
      else {
          resolve()
      }

    }).then(()=>{this.spinnerState=false;}
    ).catch((err) => this.presentAlert('data stream error', err));

  }
  ngOnDestroy(){
    console.log(" profile destroyed");

  }
  backClick(){
    console.log("must navigate to patient list");
    this.navigation.navigateTo('home/doctorList');
  }
  consultDoc(){
    this.dataShare.sendDoctorNamefromconvtoMessage(this.docData);
    console.log("doctor data from profile"+this.docData);
    this.navigation.navigateTo("home/message");
  }
  async presentAlert(subtitleString: string, messageString: string) {
    console.log('alert holding screen ');
    const alert = await this.addController.create({
      header: 'ERROR',
      subHeader: subtitleString,
      message: messageString,
      buttons: [
        {

          text: 'Ok',
          handler: () => {
            this.spinnerState=false;
            this.navigation.navigateTo('home/doctorList');
          }
        },]
    });
    await alert.present();


  }



}
