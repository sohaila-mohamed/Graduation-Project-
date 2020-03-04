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
  private Messages : newMessage[];
 @ViewChild(IonContent, {static: true})   bigContent : IonContent
  constructor(private intComp: InteractionService,
    private navigation:NavigationService ) { }
    private myMsgs:any;
    private currentUser:string;
    private currentUser2:string;
    private myCont:string;
    private msgContent:string;

   ngOnInit() {
    // this.isRendered=false;
    const that=this;
    this.intComp.msg.subscribe(
    (massage)=> { 
      console.log(massage);
      that.Messages=massage;
      console.log("tpe msg  "+that.Messages);
      // that.Messages.push(massage);
      // console.log("arra "+that.Messages);
      that.setMessege();
     
    });
    
     
  }
  setMessege(){
    this.myMsgs=this.Messages[0];
    // this.isRendered=true;
    // *ngIf="isRendered"

    console.log("type myMsgs is "+typeof(this.myMsgs));

    console.log("myMsgs",this.myMsgs);
    this.currentUser=this.myMsgs.sender_name;
    this.currentUser2=this.myMsgs.reciever_name;
    

  }
  back(){
    console.log("must navigate to patient list")
    this.navigation.navigateTo('home');

  }
  sendCurrentMsg(){

    this.myCont="";
    //thread id
    //reciever
    //sender
    this.Messages.push({
      reciever_id :29,
      msg_subject :this.myMsgs.msg_subject,
      created_date:Date.now().toString(),
      is_readed:0,
      reciever_name:this.myMsgs.reciever_name,
      sender_name:this.myMsgs.sender_name,
      msg_body:this.msgContent

     
    })
    console.log(this.Messages)
      this.bigContent.scrollToBottom(200);
  }
}
