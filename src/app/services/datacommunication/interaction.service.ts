import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {doctorData} from '../../model/doctorData';
import { patient_appointment } from 'src/app/model/myAppointmentModel';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
 private intComp= new BehaviorSubject<any>(null);
 msg =this.intComp.asObservable();

 private getDocData= new BehaviorSubject<any>({});
 data =this.getDocData.asObservable();

 private CoversationState = new BehaviorSubject<number>(0);
 currentStateConversation = this.CoversationState.asObservable();

 private Edit= new BehaviorSubject<number>(0);
 getName =this.Edit.asObservable();
 private DoctorData:BehaviorSubject<doctorData>=new BehaviorSubject<doctorData>(null);

  constructor() { }
  
  UpdateName(name){
    this.Edit.next(name);
    console.log(name);
  }
  sendMSG(message){
  this.intComp.next( message);
  console.log(message);
  }
  sendConversationState(state){
    console.log("state triggered ");
    this.CoversationState.next(state);

    console.log("state",state);

  }
  sendDoctorNamefromconvtoMessage(doctorListfromconv){
    this.getDocData.next(doctorListfromconv);
    console.log(doctorListfromconv);

  }

  sendDoctorData(data:doctorData){
      this.DoctorData.next(data);
  }
  getDoctorData():doctorData{
     return  this.DoctorData.getValue();
  }



  //appointment
  private behavioralsubjForAppointment= new BehaviorSubject<any>(new patient_appointment);
observableForAppointment =this.behavioralsubjForAppointment.asObservable();

sendAppointment(app: patient_appointment){
 this.behavioralsubjForAppointment.next( app);
 }
   
private behavioralsubjForBookAppointment= new BehaviorSubject<any>(new doctorData);
observableForBookAppointment =this.behavioralsubjForBookAppointment.asObservable();

 sendDoctorForBookedAppointment(doc: doctorData){
 this.behavioralsubjForBookAppointment.next( doc);
 }
}
