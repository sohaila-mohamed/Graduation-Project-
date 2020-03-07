import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { newMessage } from 'src/app/model/newMessage';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
 private intComp= new BehaviorSubject<any>([]);
 msg =this.intComp.asObservable();

 private CoversationState = new BehaviorSubject(1);
 currentStateConversation = this.CoversationState.asObservable();

 private communication= new BehaviorSubject<string>("");
 getDocName =this.communication.asObservable();
  constructor() { }
  sendMSG(message){
  this.intComp.next( message);
  console.log(message);
  }
  sendConversationState(state){
    this.CoversationState.next(state);
    console.log(state);
  }
  sendDoctorNamefromHometoMessage(name){
    this.communication.next(name);
    console.log(name);
  }
}
