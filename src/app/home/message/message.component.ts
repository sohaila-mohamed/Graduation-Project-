import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/datacommunication/interaction.service';
import { NavigationService } from '../NavService/navigation.service';
import { newMessage } from 'src/app/model/newMessage';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {


  constructor(private navigation:NavigationService, private _intComp: InteractionService) { }
  private Subject:string;
  private content:string;
  private Msg :newMessage;
  private Messages :  newMessage[]=[];
  ngOnInit() {
    // this.Messages=[{
    //   sender:"Shrouk",
    //   reciever:"anyone",
    //   Content:"good morning",
    //   subject:"good",
    //   sentAt:123
    // }];
  }
  send(){
    this.Messages.push({
        reciever_id :29,
        msg_subject :"postman3",
        created_date:"2020-03-04",
        is_readed:0,
        reciever_name:"sohaila",
        sender_name:"ahmed",
        msg_body:"can i ask ...."

    });
  console.log(this.content);
  console.log(this.Messages);
  this._intComp.sendMSG(this.Messages);
  this.navigation.navigateTo('home/chat');



}
}
