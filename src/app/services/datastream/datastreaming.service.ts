import { Injectable } from '@angular/core';
import { MyPatient } from 'src/app/model/patientData';
import { DatastorageService } from '../datastorage/datastorage.service';
import { doctorData } from 'src/app/model/doctorData';

@Injectable({
  providedIn: 'root'
})
export class DatastreamingService {
   
  public patient = new MyPatient;
   
  token: string;
   doctorList = new Array<doctorData>();
  // fcmToken : String;

   constructor(
     private dataStore: DatastorageService,){}

  clearDoctorList()
  {
    this.doctorList=[];

  }
  addToDoctorList(element)
  {
    //ELECT us.id, us.name, us.fcmtoken, us.mobile, doc.years_experience, relation.relationid
    const doctor = new doctorData();
    doctor.doctorId = element[0];
    doctor.name = element[1];
    doctor.fcmtoken = element[2];
    doctor.mobile= element[3];
    doctor.years_experience = element[4];
    doctor.relationid=element[5];
    this.doctorList.push(doctor);
  }
  changePatientData(name,age,address)
  {
    this.patient.address = address;
    this.patient.age=age;
    this.patient.name = name;
    this.dataStore.savePatientLocally(this.patient);

  }
  saveDoctorListToDataStore()
  {
    console.log("mydoctorlist");
    console.log(this.doctorList);
    this.dataStore.saveDoctorList(this.doctorList);
  }
  async restoreStreamDatalist(doctorList)
  {
    (await doctorList).forEach(element => {
      this.doctorList.push(element);
    });
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
     this.patient.patient_id =patientData.patient_id;
     this.patient.mobile = patientData.mobile;
     this.patient.name = patientData.name;
     this.patient.user_id = patientData.user_id;
     this.patient.password = patientData.password,
     this.patient.type = patientData.type;
     this.patient.timestamp = patientData.timestamp;
     this.patient.age = patientData.age;
     this.patient.address=patientData.address;
    //  this.dataStore.savePatientLocally(this.patient);
   }
    setPatient(patientData)
    {
      
      this.patient.patient_id =patientData.id;
      this.patient.name = patientData.user.name;
      this.patient.mobile = patientData.user.mobile;
      this.patient.user_id = patientData.user.id;
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
      console.log(this.patient.name);
      return this.patient.name;
    }
 
   clearData(){
     this.dataStore.clear();
    } 
   getPatientPassword(){
     return this.patient.password;
   }
   getPatientAddress(){
    return this.patient.address;
   }
   getPatientAge(){
    return this.patient.age;
   }
   getPatientMobile(){
    return this.patient.mobile;
   }
   




}
