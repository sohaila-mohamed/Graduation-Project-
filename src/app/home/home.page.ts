import {Component, OnInit, OnChanges, OnDestroy, ChangeDetectorRef} from '@angular/core';

import { NavigationService } from './NavService/navigation.service';
import { DatastreamingService } from '../services/datastream/datastreaming.service';
import { AlertController, ActionSheetController} from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  patientName: String;
  profileImg:String;
  val: string;
  // timer
  showSplash ;
  private Reciever:string;
  constructor(
    private navigation:NavigationService, 
    private datastream: DatastreamingService, 
    private addController : AlertController,
    private ref: ChangeDetectorRef,
    ) {
      this.patientName =this.datastream.patient.name;
      this.profileImg=this.datastream.patient.profile_img;
    }
  
    


    
    NavigateMe(path:string){
      
      this.navigation.navigateTo(path);
      console.log("navigate to ", path);

    }




    async newMessage() {
      // const actionSheet = await this.docList.create({
      //   header: 'You want to send message to:',
      //   buttons: [{
      //       //  text :'Dr.Mahmoud',  
      //      text: 'Dr.'+ this.doctorRow[0].name, //get doctor list
      //     icon: 'person',
      //     handler: () => {
      //       this.navigation.navigateTo("home/message");
      //         // this.Reciever="Dr.Mahmoud";
      //        this.Reciever= this.doctorRow[0].name;
      //        console.log("docM"+this.Reciever);
         
      //       this.intComp.sendDoctorNamefromconvtoMessage(this.doctorRow);
            

      //       //must be getten from database
      //     }
      //   },
      //    {
      //       // text:'Dr.Medhat',
      //       text: 'Dr.'+ this.doctorRow[1].name,
      //      icon: 'person',
      //     // icon: 'camera',
      //     handler: () => {
            
      //       //  this.Reciever="Dr.Medhat";
      //        this.intComp.sendDoctorNamefromconvtoMessage(this.doctorRow);
      //      this.Reciever= this.doctorRow[1].name;    
      //        this.navigation.navigateTo("home/message");
      //     }
      //   }
      //   ]
      // });
      // await actionSheet.present();
      this.navigation.navigateTo("home/doctorList");

    
    }
  
    conv(){
      this.navigation.navigateTo("home/conversation");

    }

}
 
