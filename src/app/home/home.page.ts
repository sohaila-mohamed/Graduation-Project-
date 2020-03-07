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
    private communication:InteractionService
    ) {
    }
    doctorRow = new Array<doctorData>();


    ngOnInit()
    {

      console.log("oninit");
      this.doctorRow = this.datastream.getDoctorList(); 
      console.log("doctorRow.......",this.doctorRow);
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

  


  // async addDoctor(){
  
  //   const alert =this.addController.create({
  //     header: 'Add your Doctor',
  //     animated :true,
  //     message: 'Enter code you got from your doctor.',
  //     inputs:[{
  //     type: "text",
  //     name:'val',
  //     value :""
      
      
  //     }],
  //     cssClass: "Dark",
  //     buttons:
      
  //      [{
  //       text:'Add',
        
  //       handler: async data => {
  //       let token = this.datastream.getToken();
  //       console.log("code: " + data.val);
  //       await this.http.addDoctor(data.val,token)
  //       .subscribe(
  //         response=>{
          
            
  //           console.log("http request to add doctor responce: "+ JSON.stringify(response));

  //         }, 
  //         err =>
  //         {
  //           this.presentAlert('HTTP Add Doctor Error: ', err.error.message);
  //         },
  //         async () => 
  //         {
  //           console.log('HTTP request completed.');
  //           //Get Doctor List
  //           await  this.http.getDoctorList(token)
  //                 .subscribe(
  //                   async response=>{
  //                    // timer
  //                    this.showSplash = true;
  //                    // timer
  //                   timer(10000).subscribe(()=> this.showSplash = false);
                    
  //                     // this.datastream.getPatientAge();
  //                     // this.datastream.getPatientAddress();
  //                     // this.datastream.getPatientName();
  //                     this.datastream.clearDoctorList();
  //                     await response.forEach(element => {
  //                       this.datastream.addToDoctorList(element);
                        
  //                     }); 
  //                     await this.datastream.saveDoctorListToDataStore();
  //                     console.log('HTTP request completed.');
  //                     this.navigation.navigateTo('home/doctorList');                 
  //                   }, 
  //                   err =>
  //                   {
  //                     console.log('HTTP Doctor List Error: ', err.error.message);
  //                     this.presentAlert('HTTP Doctor List Error: ', err.error.message);
  //                   },
                   
  //                 );
  
  //         }
  //       );
         
        
          
          
  
  //       }
  //   },
      
  //     {text:'Cancel',
  //     role: 'cancel'
  //      }
  //   ]
  //   });
  
  //    (await alert).present();
  //   }


    async newMessage() {
      const actionSheet = await this.docList.create({
        header: 'You want to send message to:',
        buttons: [{
            text :'Dr.Mahmoud',  
          // text: this.doctorRow[0].name, //get doctor list
          icon: 'person',
          handler: () => {
            this.navigation.navigateTo("home/message");
             this.Reciever="Dr.Mahmoud";
            // this.Reciever= this.doctorRow[0].name;
         
            this.communication.sendDoctorNamefromHometoMessage(this.Reciever);
            

            //must be getten from database
          }
        },
         {
            text:'Dr.Medhat',
          //  text: this.doctorRow[1].name,
           icon: 'person',
          // icon: 'camera',
          handler: () => {
            
             this.Reciever="Dr.Medhat";
             this.communication.sendDoctorNamefromHometoMessage(this.Reciever);
          // this.Reciever= this.doctorRow[1].name;    
             this.navigation.navigateTo("home/message");
          }
        }
        ]
      });
      await actionSheet.present();
    
    }
  
    conv(){
      this.navigation.navigateTo("home/conversation");

    }

}
 
