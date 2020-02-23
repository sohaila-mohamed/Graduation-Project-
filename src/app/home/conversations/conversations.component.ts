import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../NavService/navigation.service';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.scss'],
})
export class ConversationsComponent implements OnInit {

  constructor(private navigation: NavigationService) { }

  ngOnInit() {}
 inbox(){
  console.log("inbox");

  this.navigation.navigateTo('home/convList');

 }
 sent(){
   console.log("sent");
  this.navigation.navigateTo('conversation/convList');

}
  // <ion-col size="4">
  //          <ion-button shape="round"  (click)="inbox()" color="sub.severityLevel" style="color:black"> inbox </ion-button>
  //       </ion-col>
  //        <ion-col size="4" class="cancel">
  //           <ion-button  shape="round" (click)="sent()" color="sub.severityLevel" style="color:black"> sent </ion-button>
  //       </ion-col>
  //       <ion-col size ="4" class="fab">
  //           <app-fab></app-fab>

  //       </ion-col>
}
