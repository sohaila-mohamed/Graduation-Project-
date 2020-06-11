import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/datacommunication/interaction.service';
import { NavigationService } from '../NavService/navigation.service';
import { newMessage } from 'src/app/model/newMessage';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { HttpService } from '../HttPService/http.service';
import { Reply } from '../DataModels';
import { DatastreamingService } from 'src/app/services/datastream/datastreaming.service';
import { doctorData } from 'src/app/model/doctorData';
import {__await} from "tslib";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent  {


  constructor(
  private navigation:NavigationService,
  private intComp: InteractionService,
  // private docList:ActionSheetController,
  private addController : AlertController,
  private communication:InteractionService,
  private getDocData: InteractionService,
  private dataInteraction:InteractionService,
  private httpService:HttpService,
  private patientData:DatastreamingService,
  ) {

   }


  private Subject_from_input:string;
  private Content_from_text_area:string;
  private Reciever_from_dr_list:string;
  private newMessages :  newMessage[]=[];
  private data :Reply;
  private patientId:number;
  private thread:newMessage;
  private  thread_id:number;
  // private doctorRow = new Array<doctorData>();
  private doctorRow : doctorData;

  private eachDoctorData:doctorData;
  private patientName:string;

  ionViewWillEnter()
    {

    this.patientId=this.patientData.getPatientId();
    this.patientName=this.patientData.getPatientName();

    const that=this;
    this.getDocData.data.subscribe(
      (docData)=> { 
        that.doctorRow=docData;
        console.log("all doctors data",docData);

        console.log(this.doctorRow);
        that.setDocList();

      }
    );

    // this.Reciever_from_dr_list="Dr.Mahmoud"
    this.Content_from_text_area="";
    this.Subject_from_input="";
    // this.Reciever_from_dr_list="";
    
  }
  setDocList(){
    // this.eachDoctorData=this.doctorRow;
    console.log("type eachDoctorData is "+typeof(this.doctorRow));
    console.log("name"+this.doctorRow.name);
    this.Reciever_from_dr_list=this.doctorRow.name;
    console.log("selected doctor "+this.Reciever_from_dr_list);
    

  }


  async presentAlert(subtitleString: string, messageString: string) {
    const alert = await this.addController.create({
      header: 'ERROR',
      subHeader: subtitleString,
      message: messageString,
      buttons: ['OK']
    });

    await alert.present();
  }
  async send() {
    // tslint:disable-next-line:triple-equals
    if (this.Reciever_from_dr_list == '' || this.Content_from_text_area == '' || this.Subject_from_input == '') {
        this.presentAlert('Can not send message', 'Make sure you typed your Subject, Message and choose your Doctor.');
    } else {
      this.thread = {
        sender_id:this.patientId,
        receiver_id : this.doctorRow.doctorId,
        msg_subject : this.Subject_from_input,
        is_readed: 0,
        sender_name: this.patientName,
        receiver_name: this.Reciever_from_dr_list,
        msg_body: this.Content_from_text_area,
        fcm_token: this.doctorRow.fcmtoken

       };
      this.newMessages.push(this.thread);
      console.log(this.Content_from_text_area);
      console.log(this.newMessages);
      console.log("thread created in message ",this.thread);




  // post new message in database
  //     this.data = {
  //   sender_id: this.patientId,
  //   receiver_id: this.thread.receiver_id,
  //   msg_body: this.thread.msg_body,
  //   thread_subject: this.Subject_from_input,
  //   fcm_token: this.doctorRow.fcmtoken
  //  };


   console.log("thread_data to go",this.thread);
  await this.httpService.postThread(this.thread,this.patientId).subscribe((res)=>{
    console.log("post thread response ",res);
    this.thread_id=res.insertId;
    console.log("thread id inserted",this.thread_id);
    console.log("reply data to go", this.data);
      let newThread={
          newMessages:this.newMessages.reverse(),
          thread:this.thread,
          thread_id:this.thread_id
      };
      this.intComp.sendMSG(newThread);
      this.navigation.navigateTo('home/chat');

 // this.httpService.postReply(this.data,res.insertId).subscribe((msg)=>{
 //    console.log("post first thread reply response ",msg);
 //  this.navigation.navigateTo('home/chat');
 //     //send message content to chat component
 //
 //
 //    });

    
   });



  }
 console.log(this.Content_from_text_area);
}


// async chooseDoctor() {
//   const actionSheet = await this.docList.create({
//     header: 'You want to send message to:',
//     buttons: [{
//       text: 'Dr.Mahmoud',//get doctor list
//       icon: 'person',
//       handler: () => {
//         // this.navigation.navigateTo("home/message");
//         this.Reciever_from_dr_list="Dr.Mahmoud";
//         //must be getten from database
//       }
//     },
//      {
//       text: 'Dr.Medhat',
//       icon: 'person',
//       // icon: 'camera',
//       handler: () => {
        
//         this.Reciever_from_dr_list="Dr.Medhat";
        

//         // this.navigation.navigateTo("home/schedule");
//       }
//     }
//     ]
//   });
//   await actionSheet.present();
// }
// <ion-button class ="docButton" (click)="chooseDoctor()" slot="end" color="sub.severityLevel" style="color:black">
//          choose your doctor first
//      </ion-button>
}
