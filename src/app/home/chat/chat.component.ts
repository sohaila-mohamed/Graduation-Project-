import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { InteractionService } from 'src/app/services/datacommunication/interaction.service';
import { newMessage } from 'src/app/model/newMessage';
import { NavigationService } from '../NavService/navigation.service';
import {AutosizeModule} from 'ngx-autosize';
import { IonContent } from '@ionic/angular';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  private newMessages : newMessage[]=[];
 @ViewChild(IonContent, {static: true})   bigContent : IonContent
  constructor(private intComp: InteractionService,
    private navigation:NavigationService ) { }
    private newMsgs:any;
    private currentUser:string;
    private currentUser2:string;
    private replyContent:string;

   ngOnInit() {
    // this.isRendered=false;
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
   sendReply(){

    //thread id
    //reciever
    //sender
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
      this.replyContent="";
      this.bigContent.scrollToBottom(200);
  }
}
