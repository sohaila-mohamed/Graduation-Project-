import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { InteractionService } from 'src/app/services/datacommunication/interaction.service';
import { newMessage } from 'src/app/model/newMessage';
import { NavigationService } from '../NavService/navigation.service';
import {AutosizeModule} from 'ngx-autosize';
import { IonContent } from '@ionic/angular';
import { Reply } from '../DataModels';
import { HttpService } from '../HttPService/http.service';
import { DatastreamingService } from 'src/app/services/datastream/datastreaming.service';
import { doctorData } from 'src/app/model/doctorData';
import { timer } from 'rxjs';



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
    private docname:string;
    private userToRecieve:number;
    private pId:number;
    


    ngOnInit(){}

    ionViewWillEnter() {
    console.log("pid: ",this.pId);
    this.pId =this.datastream.getPatientId();
   

    this.communication.getId.subscribe(
      (id)=>{
        this.tId =id;
        console.log("id "+this.tId)
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
          this.userToRecieve=dRow.doctorId;
          console.log("userToRecieve"+this.userToRecieve);
          this.docname=dRow.name;
         
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
     this.sendReply(this.tId );
   }
   sendReply(threadId){
     console.log("this.tId: ",threadId);
     console.log(this.newMessages);
     console.log("userToRecieve"+this.userToRecieve);

       //////////////////////////////////
       this.data={
              sender_id:this.pId,
              reciever_id:this.userToRecieve,
              msg_body:this.replyContent,
              created_date:new Date().toLocaleString(),
      
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