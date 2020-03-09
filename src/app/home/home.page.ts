import { Component, OnInit } from '@angular/core';

import { NavigationService } from './NavService/navigation.service';
import { DatastreamingService } from '../services/datastream/datastreaming.service';
import { AlertController, ActionSheetController} from '@ionic/angular';
import { HttpService } from './HttPService/http.service';
import { timer } from 'rxjs';
import { ConversationsComponent } from './conversations/conversations.component';
import { InteractionService } from '../services/datacommunication/interaction.service';
import { doctorData } from '../model/doctorData';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  patientName: String;
  val: string;
  // timer
  showSplash 
  private Reciever:string;
  constructor(
    private navigation:NavigationService, 
    private datastream: DatastreamingService, 
    private http: HttpService,
    private addController : AlertController,
    private docList:ActionSheetController,
    private intComp:InteractionService
    ) {
    }
    doctorRow = new Array<doctorData>();


    ngOnInit()
    {

      console.log("oninit");
      this.doctorRow = this.datastream.getDoctorList(); 
      console.log("doc"+this.doctorRow[0]);
      this.patientName =this.datastream.getPatientName();
      // if(this.patientName==undefined )
      // {
      //   this.presentAlert('HTTP DataStream Error: ', "My Patient Name is Null");
      //   console.log("this.datastream.getPatientName()==undefined ");
      //   this.navigation.navigateTo('cover');
      // }  
      this.getDocList();
    }

getDocList()
{
  const token = this.datastream.getToken();
  console.log("Token to get doctor list in home page: ",token);
}
    
  clear()
  {
        this.datastream.clearData();
        this.navigation.navigateTo('cover');
  }

    
  NavigateMe(path:string){
    
    this.navigation.navigateTo(path);
    console.log("navigate to ", path);

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
 
