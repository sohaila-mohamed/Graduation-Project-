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
  this.navigation.navigateTo('home/convList');

 }
 sent(){
  this.navigation.navigateTo('home/convList');

}
}
