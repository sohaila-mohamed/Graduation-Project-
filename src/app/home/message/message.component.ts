import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/datacommunication/interaction.service';
import { NavigationService } from '../NavService/navigation.service';
import { newMessage } from 'src/app/model/newMessage';
import { AlertController } from '@ionic/angular';
import { HttpService } from '../HttPService/http.service';
import { Reply } from '../DataModels';
import { DatastreamingService } from 'src/app/services/datastream/datastreaming.service';
import { doctorData } from 'src/app/model/doctorData';

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
        console.log("all doctors data",docData)

        console.log(this.doctorRow)
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

  
  // async presentAlert(subtitleString:string,messageString:string) {
  //   const alert = await this.addController.create({
  //     header: 'ERROR',
  //     subHeader: subtitleString,
  //     message: messageString,
  //     buttons: ['OK']
  //   });
  
  //   await alert.present();
  // }
  send(){
    if(this.Reciever_from_dr_list==""||this.Content_from_text_area==""||this.Subject_from_input==""){
        alert('Can not send message'+ " Make sure you typed your Subject, Message and choose your Doctor.");
    }
    else{
      this.thread={
        reciever_id :this.doctorRow.doctorId,
        msg_subject :this.Subject_from_input,
        created_date:new Date().toLocaleString(),
        is_readed:0,
        reciever_name:this.Reciever_from_dr_list,
        sender_name:this.patientName,
        msg_body:this.Content_from_text_area,
        
       }
    this.newMessages.push(this.thread);
    console.log(this.Content_from_text_area);
    console.log(this.newMessages);


   
   
  //post new message in database
     this.data={
    sender_id:this.patientId,
    reciever_id:this.thread.reciever_id,
    msg_body:this.thread.msg_body,
    created_date:new Date().toLocaleString(),
    thread_subject:this.Subject_from_input,
    fcm_token:this.doctorRow.fcmtoken
   };


  //  console.log("tthread"+this.thread.reciever_name)
  //  console.log("data"+this.data.sender_id)
  this.httpService.postThread(this.thread,this.patientId).subscribe((res)=>{
    console.log("new thread data",res);
     
     this.communication.getThreadIdfromMessageorConvListtoChat(res.insertId);
     

     console.log("hey tehre:", this.data);
   this.httpService.postReply(this.data,res.insertId).subscribe((msg)=>{
    console.log("heyyyyloo");
    console.log("first thread message",msg);
    console.log("NAVIGATIOM11");

  this.navigation.navigateTo('home/chat');

    });

    
   });

  //send message content to chat component
  this.intComp.sendMSG(this.newMessages);
  console.log("NAVIGATIOM");

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
