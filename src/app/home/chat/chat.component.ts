import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { InteractionService } from 'src/app/services/datacommunication/interaction.service';
import { newMessage } from 'src/app/model/newMessage';
import { NavigationService } from '../NavService/navigation.service';
import {AutosizeModule} from 'ngx-autosize';
import { IonContent } from '@ionic/angular';
import { Reply } from '../DataModels';
import { HttpService } from '../HttPService/http.service';
import { DatastreamingService } from 'src/app/services/datastream/datastreaming.service';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  private newMessages : newMessage[]=[];
 @ViewChild(IonContent, {static: true})   bigContent : IonContent
  constructor(private intComp: InteractionService,
    private navigation:NavigationService,
    private httpService:HttpService,
    private patientData:DatastreamingService,

    
    private communication:InteractionService,
    ) { }

    private tId:number;
    private newMsgs:any;
    private currentUser:string;
    private currentUser2:string;
    private replyContent:string;
    private data :Reply;


   ngOnInit() {
    // this.isRendered=false;
    this.communication.getId.subscribe(
        (id)=>{
          this.tId =id;
          console.log("id "+this.tId)
        }
    )
    const that=this;
    this.intComp.msg.subscribe(
    (massage)=> { 
      console.log(massage);
      that.newMessages=massage;
      console.log("tpe msg  "+that.newMessages);
      // that.Messages.push(massage);
      // console.log("arra "+that.Messages);

      that.setMessege();
     
    });
    
     
  }
  setMessege(){
    this.newMsgs=this.newMessages[0];
    // this.isRendered=true;
    // *ngIf="isRendered"

    console.log("type myMsgs is "+typeof(this.newMsgs));

    console.log("myMsgs",this.newMsgs);
    this.currentUser=this.newMsgs.sender_name;
    // this.currentUser2=this.newMsgs.reciever_name;
    console.log("rec ",this.newMsgs.reciever_name);
    

  }
  back(){
    console.log("must navigate to patient list")
    this.navigation.navigateTo('home');

  }
   sendReply(threadId){
     console.log("sendRep"+threadId)

   
    this.newMessages.push({
      reciever_id :this.newMsgs.reciever_id,
      msg_subject :this.newMsgs.msg_subject,
      created_date:this.newMsgs.created_date,
      is_readed:this.newMsgs.is_readed,
      reciever_name:this.newMsgs.reciever_name,
      sender_name:this.newMsgs.sender_name,
      msg_body:this.replyContent

     
    });
      console.log(this.newMessages)
       //////////////////////////////////
       this.data={
              sender_id:this.patientData.getPatientId(),
              reciever_id:this.newMsgs.reciever_id,
              msg_body:this.replyContent,
              created_date:this.newMsgs.created_date,
      
          }
            this.httpService.postReply(this.data,threadId).subscribe((res)=>{
              console.log("posted",res);
            });
            this.replyContent="";
            this.bigContent.scrollToBottom(200);


  }
}
