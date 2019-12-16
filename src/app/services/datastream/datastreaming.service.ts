import { Injectable } from '@angular/core';
import { MyPatient } from 'src/app/model/patientData';
import { DatastorageService } from '../datastorage/datastorage.service';

@Injectable({
  providedIn: 'root'
})
export class DatastreamingService {
   patient = new MyPatient;
   token: string;

   constructor(
     private dataStore: DatastorageService,

   ){}

   SetPatientforLogin(patientData)
   {
     console.log("data stream set Patient");
     this.patient.patient_id =patientData.patient_id;
     this.patient.name = patientData.name;
     this.patient.user_id = patientData.user_id;
     this.patient.email = patientData.email;
     this.patient.password = patientData.password,
     this.patient.type = patientData.type;
     this.patient.timestamp = patientData.timestamp;
     this.patient.age = patientData.age;
     this.patient.address=patientData.address;
     this.dataStore.savePatientLocally(this.patient);
   }
    setPatient(patientData)
    {
      console.log("data stream set Patient");
      this.patient.patient_id =patientData.patient_id;
      this.patient.name = patientData.user.name;
      this.patient.user_id = patientData.user.user_id;
      this.patient.email = patientData.user.email;
      this.patient.password = patientData.user.password,
      this.patient.type = patientData.user.type;
      this.patient.timestamp = patientData.user.timestamp;
      this.patient.age = patientData.age;
      this.patient.address=patientData.address;
      this.dataStore.savePatientLocally(this.patient);
    }
    setToken(token)
    {
      console.log("data stream set Token");
      this.token = token;
      this.dataStore.saveTokenLocally(token);
    }
 getPatientName()
 {
  return this.patient.name;
 }
 
 clearData(){
this.dataStore.clear();
} 





}
