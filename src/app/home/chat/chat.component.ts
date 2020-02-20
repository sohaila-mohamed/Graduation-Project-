import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/datacommunication/interaction.service';
import { newMessage } from 'src/app/model/newMessage';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  private Msg = new  newMessage;
  private Messages :  newMessage[]=[];
  constructor(private _intComp: InteractionService ) { }

  ngOnInit() {
    this._intComp.msg$.subscribe(
      massage =>{ 
        console.log(massage);
        this.Messages.push(massage[0]);
        console.log(this.Messages);
    
        } 
    );
  }

}
