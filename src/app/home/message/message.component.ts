import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/datacommunication/interaction.service';
import { NavigationService } from '../NavService/navigation.service';
import { newMessage } from 'src/app/model/newMessage';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { HttpService } from '../HttPService/http.service';
import { Reply } from '../DataModels';
import { DatastreamingService } from 'src/app/services/datastream/datastreaming.service';
import { doctorData } from 'src/app/model/doctorData';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {


  constructor(private navigation:NavigationService,
  private intComp: InteractionService,
  // private docList:ActionSheetController,
  private addController : AlertController,
  private communication:InteractionService,
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
  private doctorRow = new Array<doctorData>();
  private eachDoctorData:doctorData;
  private patientName:string;

    ngOnInit()
    {
      
    
    this.patientId=this.patientData.getPatientId();
    this.patientName=this.patientData.getPatientName();

    const that=this;
    this.intComp.msg.subscribe(
      (doclist)=> { 
        that.doctorRow=doclist;
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
    this.eachDoctorData=this.doctorRow[0];
    console.log("type eachDoctorData is "+typeof(this.eachDoctorData));
    console.log("name"+this.eachDoctorData.name);
    this.Reciever_from_dr_list=this.eachDoctorData.name;
    console.log("rec"+this.Reciever_from_dr_list);
    

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
  send(){
    if(this.Reciever_from_dr_list==""||this.Content_from_text_area==""||this.Subject_from_input==""){
        this.presentAlert('Can not send message', "Make sure you typed your Subject, Message and choose your Doctor.");
    }
    else{
      this.thread={
        reciever_id :this.eachDoctorData.doctorId,
        msg_subject :this.Subject_from_input,
        created_date:new Date().toLocaleString(),
        is_readed:0,
        reciever_name:this.Reciever_from_dr_list,
        sender_name:this.patientName,
        msg_body:this.Content_from_text_area
    
       }
    this.newMessages.push(this.thread);
    console.log(this.Content_from_text_area);
    console.log(this.newMessages);


   
   
  //post new message in data base
   
   this.data={
    sender_id:this.patientId,
    reciever_id:this.thread.reciever_id,
    msg_body:this.thread.msg_body,
    created_date:this.thread.created_date
   };

   console.log("tthread"+this.thread.reciever_name)
   console.log("data"+this.data.sender_id)
   this.httpService.postThread(this.thread,this.patientId).subscribe((res)=>{
    console.log("new thread data",res);
     
     this.communication.getThreadIdfromMessageorConvListtoChat(res.insertId);
     
   this.httpService.postReply(this.data,res.insertId).subscribe((msg)=>{
    console.log("first thread message",msg);

    });

    
   });

  //send message content to chat component
  this.intComp.sendMSG(this.newMessages);
  
   this.navigation.navigateTo('home/chat');

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
