import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationService } from '../NavService/navigation.service';
import { HttpService } from '../HttPService/http.service';
import { InteractionService } from 'src/app/services/datacommunication/interaction.service';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.scss'],
})
export class ConversationsComponent implements OnInit {

  constructor(private navigation: NavigationService
     , private httpService:HttpService
     ,private dataInteraction:InteractionService) { }

  ngOnInit() {
    this.dataInteraction.sendConversationState(0);
    this.navigation.navigateTo('home/conversation/convList');
  }
 inbox(){
  console.log("inbox");
  this.dataInteraction.sendConversationState(0);
 
 }
 sent(){
   console.log("sent");
   this.dataInteraction.sendConversationState(1);

}
back(){
  this.navigation.navigateTo('home');
}
CreateNew(){
        
        this.navigation.navigateTo('home/message');
}

}
