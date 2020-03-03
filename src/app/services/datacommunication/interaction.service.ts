import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { newMessage } from 'src/app/model/newMessage';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
 private _intComp= new Subject<newMessage>();
 msg$ =this._intComp.asObservable();
 private CoversationState = new BehaviorSubject(1);
 currentStateConversation = this.CoversationState.asObservable();
  constructor() { }
  sendMSG(message){
  this._intComp.next( message);
  console.log(message);
  }
  sendConversationState(state){
    this.CoversationState.next(state);
    console.log(state);
  }
}
