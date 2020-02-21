import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { newMessage } from 'src/app/model/newMessage';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
 private _intComp= new Subject<newMessage>();
 msg$ =this._intComp.asObservable();
  constructor() { }
  sendMSG(message){
  this._intComp.next( message);
  console.log(message);
  }
}
