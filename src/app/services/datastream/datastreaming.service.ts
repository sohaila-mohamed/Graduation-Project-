import { Injectable } from '@angular/core';
import { MyPatient } from 'src/app/model/patientData';
import { DatastorageService } from '../datastorage/datastorage.service';
import { doctorData } from 'src/app/model/doctorData';

@Injectable({
  providedIn: 'root'
})
export class DatastreamingService {
   patient = new MyPatient;
   token: string;
   doctorList = new Array<doctorData>();

   constructor(
     private dataStore: DatastorageService,){}

  clearDoctorList()
  {
    this.doctorList=[];
  }
  addToDoctorList(doc)
  {
    const doctor = new doctorData;
    doctor.doctorId = doc.doctorId;
    doctor.name = doc.name;
    doctor.email= doc.email;
    doctor.years_experience = doc.years_experience;
    this.doctorList.push(doctor);
    console.log(this.doctorList);
  }
  saveDoctorListToDataStore()
  {
    this.dataStore.saveDoctorList(this.doctorList);
  }
  async restoreStreamDatalist(doctorList)
  {
    (await doctorList).forEach(element => {
      this.doctorList.push(element);
    });;
  }
   getDoctorList()
   {
    return this.doctorList;
   }
   getToken()
   {
     return this.token;
   }
   getPatientId()
   {
     return this.patient.patient_id;
   }

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
