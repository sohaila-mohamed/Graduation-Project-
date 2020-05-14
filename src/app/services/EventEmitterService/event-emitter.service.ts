import {EventEmitter, Injectable} from '@angular/core';
import {Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {
  FunctionCaller=new EventEmitter<number>();
  subscription:Subscription;
  constructor() { }
  OnComponentCall(state){
    this.FunctionCaller.emit(state);
  }
}
