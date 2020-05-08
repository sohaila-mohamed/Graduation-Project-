import { Component, OnInit } from '@angular/core';
// import { IDoctor } from '../DataModels';
import { DatastreamingService } from 'src/app/services/datastream/datastreaming.service';
import { NavigationService } from '../NavService/navigation.service';
import { doctorData } from 'src/app/model/doctorData';
import { HttpService } from '../HttPService/http.service';
import { AlertController} from '@ionic/angular';
import {__await} from 'tslib';
import {InteractionService} from '../../services/datacommunication/interaction.service';


@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss'],
})
export class DoctorListComponent implements OnInit {
  doctorArrayList=new Array<doctorData>();
  doctorRow = new Array<doctorData>();
  constructor(
    private datastream : DatastreamingService, 
    private navigation : NavigationService,
    private addController : AlertController,
    private http: HttpService,
    private dataShare:InteractionService
    ) {
      // this.doctorRow = this.datastream.getDoctorList();     
     } 

    
     ionViewWillEnter() {
       let that = this;
       let token = this.datastream.getToken();
       //Get Doctor List
       this.http.getDoctorList(token)
                .subscribe(
                  async response=>{
                    console.log("respponce of doctor list");
                    console.log(JSON.stringify(response));

                    this.datastream.clearDoctorList();
                    await response.forEach(element => {                    
                      this.datastream.addToDoctorList(element);
                    });          
                    
                    this.doctorRow = this.datastream.getDoctorList();
                    this.doctorArrayList = this.doctorRow;

                  }, 
                  err =>
                  {
                    console.log('HTTP Doctor List Error: ', err.error.message);
                    this.presentAlert('HTTP Doctor List Error: ', err.error.message);
                  },
                  () => 
                  {
                    this.datastream.saveDoctorListToDataStore();
                    console.log('HTTP request completed.');
                  }
                );

  
   
   
   
     }
   
     initializeList(){
       this.doctorArrayList = this.doctorRow;
     }
   
     filterList(event) {  
       this.initializeList();
   
       const searchTerm = event.srcElement.value;
     
       if (!searchTerm) { //if the user didn't input anything
         return;
       }
     
       this.doctorArrayList = this.doctorArrayList.filter(currentGoal => {
         if (currentGoal.name && searchTerm) {
           if (currentGoal.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
             return true;
           }
           return false;
         }
       });
     }

   
  ngOnInit() {}
  consultDoc(item:doctorData){
        this.dataShare.sendDoctorNamefromconvtoMessage(item);
        console.log("doctor data from profile"+item);
        this.navigation.navigateTo("home/message");
    }
  backClick(){
    console.log("must navigate to patient list");
    this.navigation.navigateTo('home');

  }
  //resolving doctor data before navigating to doctor profile
  Resolve_DocData(path:string,data:doctorData){
      this.dataShare.sendDoctorData(data);
      __await(this.navigateTo(path));



  }
  navigateTo(path){
      this.navigation.navigateTo(path);
  }
  async presentAlert(subtitleString:string,messageString:string) {
    const alert = await this.addController.create({
      header: 'ERROR',
      subHeader: subtitleString,
      message: messageString,
      buttons: ['OK']
    });

    await alert.present();
  }
}
