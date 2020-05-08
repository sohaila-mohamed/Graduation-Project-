import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { InteractionService } from 'src/app/services/datacommunication/interaction.service';
import { NavigationService } from '../NavService/navigation.service';
import { IonContent } from '@ionic/angular';
import { Reply, Iconvs } from '../DataModels';
import { HttpService } from '../HttPService/http.service';
import { DatastreamingService } from 'src/app/services/datastream/datastreaming.service';
import { doctorData } from 'src/app/model/doctorData';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
 @ViewChild(IonContent, {static: false})   bigContent : IonContent
  constructor(private intComp: InteractionService,
    private navigation:NavigationService,
    private httpService:HttpService,
    private datastream: DatastreamingService, 
    private communication:InteractionService,
    private dateInteraction:InteractionService
    ) { }
   
    private newMessages : any[]=[];
    private tId:number;
    private newMsgs:any;
    private replyContent:string;
    private data :Reply;
    private docRow = new Array<doctorData>();
    private pId:number;
    private thread: Iconvs;
    private doctor:doctorData;
    


    ngOnInit(){}

    ionViewWillEnter() {
    console.log("pid: ",this.pId);
    this.pId =this.datastream.getPatientId();
   

    this.communication.getId.subscribe(
      (thread)=>{
        this.thread=thread;
        console.log("id "+this.thread.thread_id)
     });
  
  this.docRow = this.datastream.getDoctorList(); 
  console.log(this.docRow);

  const that=this;
  this.intComp.msg.subscribe(
  (massagesFromMessageOrConvList)=> { 
    console.log("replies in chat: " ,massagesFromMessageOrConvList);
    that.newMessages=massagesFromMessageOrConvList;
    
    
    console.log("tpe msg  "+that.newMessages);
    

    that.setMessege();
  });
  

   }
  
  setMessege(){
    this.newMsgs=this.newMessages[0];
    if (this.newMsgs.sender_id==undefined){
      this.newMsgs.sender_id=this.pId;
      console.log("newMsgs.sender_id"+this.newMsgs.sender_id)   
      console.log("newMsgs if denderid is undefined"+this.newMsgs)   

    }
    // timer(3000).subscribe(()=> this.repliesAreHere = false);
  console.log("type myMsgs is "+typeof(this.newMsgs));
   
      console.log("myMsgs",this.newMsgs);
      for(let dRow of this.docRow){

        if(this.newMsgs.reciever_id==dRow.doctorId || this.newMsgs.sender_id==dRow.doctorId){
          this.doctor=dRow;
          console.log("doctor.doctorId"+this.doctor.doctorId);
          
        }
      }
     console.log("newMsgs.sender_id"+this.newMsgs.sender_id)   
     console.log("sender",this.pId);    
  }


  back(){
    this.navigation.navigateTo('home');
   }

   sendReplyFun()
   {
     this.sendReply(this.thread.thread_id );
   }
   sendReply(threadId){
     console.log("this.thread.thread_id: ",threadId);
     console.log(this.newMessages);
     console.log("doctor.doctorId"+this.doctor.doctorId);

       //////////////////////////////////
       this.data={
              sender_id:this.pId,
              reciever_id:this.doctor.doctorId,
              msg_body:this.replyContent,
              created_date:new Date().toLocaleString(),
              thread_subject:this.thread.msg_subject,
              fcm_token:this.doctor.fcmtoken
              
          }
            this.httpService.postReply(this.data,threadId).subscribe((res)=>{
              console.log("posted",res);
              this.newMessages.push(this.data);

            });
            //  this.httpService.getReplies(threadId,0).subscribe((res)=>{
            //   // this.intComp.sendMSG(res);
            //   console.log("replies",res);
            //   this.newMessages=res;  
            //   this.newMsgs=this.newMessages[0];
            //  });
             this.replyContent="";
 
            this.bigContent.scrollToBottom(200);
            ////////////////////////////////////////////////////////////////////////////////////
           


  }

  goConv(){

   this.navigation.navigateTo("home/conversation/convList");

  }
}


// <ion-row *ngIf="repliesAreHere">
        
           
// <div class="skeleton" >
//     <ion-skeleton-text animated style="width: 100%" ></ion-skeleton-text>
//     <ion-skeleton-text animated style="width: 85%" ></ion-skeleton-text>
//     <ion-skeleton-text animated style="width: 60%" ></ion-skeleton-text>
//     <ion-skeleton-text animated style="width: 45%" ></ion-skeleton-text>
//     <ion-skeleton-text animated style="width: 30%" ></ion-skeleton-text>
// </div>
// <div class="skeleton">
//    <ion-skeleton-text animated style="width: 30%" ></ion-skeleton-text>
//     <ion-skeleton-text animated style="width: 45%"></ion-skeleton-text>
//     <ion-skeleton-text animated style="width: 60%" ></ion-skeleton-text>
//     <ion-skeleton-text animated style="width: 85%" ></ion-skeleton-text>
//     <ion-skeleton-text animated style="width: 100%" ></ion-skeleton-text>
// </div>
// <div class="skeleton">
//     <ion-skeleton-text animated style="width: 100%" ></ion-skeleton-text>
//     <ion-skeleton-text animated style="width: 85%" ></ion-skeleton-text>
//     <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
//     <ion-skeleton-text animated style="width: 45%" ></ion-skeleton-text>
//     <ion-skeleton-text animated style="width: 30%"></ion-skeleton-text>
// </div>
// </ion-row>