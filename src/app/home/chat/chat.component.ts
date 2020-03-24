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
    private currentUser:number;
    private replyContent:string;
    private data :Reply;
    private docRow = new Array<doctorData>();
    private docname:string;
    private repliesAreHere: boolean;
    private currentState:number;
    // private userToSend:number;
    private userToRecieve:number;
    private pId:number;



    ngOnInit(){}

    ionViewWillEnter() {
    this.repliesAreHere=true;
    this.pId =this.datastream.getPatientId();
    this.dateInteraction.currentStateConversation.subscribe(state=>{
          this.currentState=state;
          console.log("scurrentState"+this.currentState);
     });

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
    console.log(massagesFromMessageOrConvList);
    // this.repliesAreHere=false;
    that.newMessages=massagesFromMessageOrConvList;
    
    
    console.log("tpe msg  "+that.newMessages);
    // that.Messages.push(massage);
    // console.log("arra "+that.Messages);

    that.setMessege();
        
  });
  

   }
  
  setMessege(){
    this.newMsgs=this.newMessages[0];
    timer(3000).subscribe(()=> this.repliesAreHere = false);

   if(this.currentState==2){
     console.log("Messages from Create New");
     console.log("type myMsgs is "+typeof(this.newMsgs));

      console.log("myMsgs",this.newMsgs);
      for(let dRow of this.docRow){
        if(this.newMsgs.reciever_id==dRow.doctorId){
          this.userToRecieve=this.newMsgs.reciever_id;
          console.log("userToRecieve"+this.userToRecieve);
          this.docname=this.newMsgs.reciever_name;
        }
      }
     this.currentUser=this.pId;
     console.log("curr ",this.currentUser);
     console.log("sender",this.pId); 

    }
 else if (this.currentState==1) {
  console.log("Messages from Sent");
  console.log("type myMsgs is "+typeof(this.newMsgs));

      console.log("myMsgs",this.newMsgs);
      for(let dRow of this.docRow){
        if(this.newMsgs.reciever_id==dRow.doctorId){
          this.userToRecieve=dRow.doctorId;
          console.log("userToRecieve"+this.userToRecieve);
          this.docname=dRow.name;
        }
      }
     this.currentUser=this.pId;
     console.log("curr ",this.currentUser);
     console.log("sender",this.pId);     
 } 

 else if(this.currentState==0){
  console.log("Messages from Inbox");
  console.log("type myMsgs is "+typeof(this.newMsgs));

      console.log("myMsgs",this.newMsgs);
      for(let dRow of this.docRow){
        if(this.newMsgs.sender_id==dRow.doctorId){
          this.userToRecieve=this.newMsgs.sender_id;
          console.log("userToRecieve"+this.userToRecieve);
          this.docname=dRow.name;
        }
      }
     this.currentUser=this.pId;
     console.log("curr ",this.currentUser);
     console.log("sender",this.pId);     

    }
   
  }

  back(){
    console.log("must navigate to patient list")
    this.navigation.navigateTo('home');
   }

   sendReply(threadId){
     console.log("sendRep"+threadId)
     console.log(this.newMessages)
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
            });
             this.httpService.getReplies(threadId,0).subscribe((res)=>{
              // this.intComp.sendMSG(res);
              console.log("replies",res);
              this.newMessages=res;  
              this.newMsgs=this.newMessages[0];
              this.currentUser=this.pId;
              console.log("from repl ",this.currentUser);     
             });
             this.replyContent="";
 
            this.bigContent.scrollToBottom(200);
            ////////////////////////////////////////////////////////////////////////////////////
           


  }

  goConv(){

   this.navigation.navigateTo("home/conversation/convList");

  }
}