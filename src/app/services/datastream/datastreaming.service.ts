import { Injectable } from '@angular/core';
import { MyPatient } from 'src/app/model/patientData';

@Injectable({
  providedIn: 'root'
})
export class DatastreamingService {
   patient = new MyPatient;

    setPatient(patientData)
    {
      this.patient.patient_id =patientData.patient_id;
      this.patient.name = patientData.user.name;
      this.patient.user_id = patientData.user.user_id;
      this.patient.email = patientData.user.email;
      this.patient.password = patientData.user.password,
      this.patient.type = patientData.user.type;
      this.patient.timestamp = patientData.user.timestamp;
      this.patient.age = patientData.age;
      this.patient.address=patientData.address;
    }
 getPatientName()
 {
  return this.patient.name;
 }
 





}
