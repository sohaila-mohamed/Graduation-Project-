import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Iconvs, Reply, UpVitals} from '../DataModels';
import {newMessage} from 'src/app/model/newMessage';
import {defaultIfEmpty, flatMap, map, reduce} from 'rxjs/operators';
import {TokenClass} from 'src/app/model/token';
import {DatastreamingService} from 'src/app/services/datastream/datastreaming.service';
import {FCM} from '@ionic-native/fcm/ngx';
import {doctorData} from 'src/app/model/doctorData';
import {inboxThread} from "../../model/ConsultationModel";
import { patient_appointment } from 'src/app/model/myAppointmentModel';
import { DateFormatService } from 'src/app/services/dateFormatService/date-format.service';
import { slots } from 'src/app/model/slooots';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  Node_host ="http://ec2-3-87-1-35.compute-1.amazonaws.com:3000/";
  //   Node_host="http://dbea70375c2c.ngrok.io/";
 // Java_Host_Port ="http://986b7152e0e7.ngrok.io";
    Java_Host_Port = 'http://ec2-54-166-181-90.compute-1.amazonaws.com:8080';

  constructor(private http:HttpClient,
    private dataStream: DatastreamingService,
        private fcm: FCM,
        private format: DateFormatService) {
  }




  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin' :'*'
 
    })
  };
  //-------------------------------------------------------------------------------




  PostVitals(vital:any,id:number): Observable<any>{
    const Url =this.Node_host+"api/users/vitals/"+id;
    vital=JSON.stringify(vital);
    console.log("JSON Vitals",vital);
    console.log("URL",Url);
    return this.http.post<any>(Url, vital, this.httpOptions);
  }


  PutVital(vital:UpVitals,id:number): Observable<any>{
    const Url =this.Node_host+"api/users/vitals/"+id;
    let Svital=JSON.stringify(vital);
    console.log("URL",Url);
    return this.http.put<any>(Url, Svital, this.httpOptions);
  }
  GetVitals(id:number){
    const Url =this.Node_host+"api/users/vitals/"+id;
    console.log("URL",Url);
    return this.http.get<any>(Url, this.httpOptions);
  }
    



 getSent(user_id,offset):Observable<any[]>{
  const Url =this.Node_host+"api/users/threads/sent/"+user_id+"/"+offset;
  console.log("URL",Url);
  return this.http.get<any>(Url, this.httpOptions);
 }


 getInbox(user_id,offset):Observable<any[]>{
  const Url =this.Node_host+"api/users/threads/inbox/"+this.dataStream.getPatientId()+"/"+offset;
  console.log("URL",Url);
     return this.http.get<Iconvs[]>(Url, this.httpOptions).pipe(
         flatMap((consult) => {console.log("consult",consult);
         return  consult;})
         ,map((consult)=>{
         console.log("map",consult);
         console.log("doctors",this.dataStream.getDoctorList());
         return new inboxThread(consult.sender_id, consult.receiver_id, consult.thread_id,
             consult.msg_subject, consult.created_date,consult.is_readed,consult.sender_name,consult.receiver_name,consult.msg_body,
             this.dataStream.getDoctorList().find(doctorData=>doctorData.doctorId==consult.sender_id).user_image)
     } ),reduce<any>((consults,consult)=>{
             if (consults.length ) {
                 return [...consults,consult];
             } else {

                 console.log("consults,consult",[consults,consult]);
                 return [consults, consult];

             }

         }), defaultIfEmpty([])
     )

 }

 postThread(data:newMessage,sender_id:number){
  const Url =this.Node_host+"api/users/threads/"+this.dataStream.getPatientId();
  let thread=JSON.stringify(data);
  console.log("JSON Thread_data",thread);
  console.log("URL",Url);
  return this.http.post<any>(Url, thread, this.httpOptions);

 }
 postReply(data:Reply,id:number){

  console.log("data inside http: ",data);
  const Url =this.Node_host+"api/users/threads/msg/"+id;
  let reply=JSON.stringify(data);
  console.log("JSON Reply_data",reply);
  console.log("URL",Url);
  return this.http.post<any>(Url, reply, this.httpOptions);
 }
 getReplies(thread_id,offset){
  const Url =this.Node_host+"api/users/threads/replies/"+thread_id+"/"+offset;
  console.log("URL",Url);
  return this.http.get<any>(Url, this.httpOptions);

 }




 //----------------------------------------------------------------------------------------------
 public getDoctorSlot(doctorId){

  let url="http://ec2-3-87-1-35.compute-1.amazonaws.com:3000/api/users/doctor/schedule/"+ doctorId;
  
  return this.http.get<any>(url, this.httpOptions).pipe(
    flatMap(appointments => appointments),
    map((appointment:slots)=>
    {
      if(this.format.compareDate(appointment.date, new Date().toJSON().slice(0,10))!=-1)
      {
        let app = JSON.parse(JSON.stringify(appointment));
        // console.log(app);
        app.date = this.format.formateJSONDateToDayMonthYear(app.date);
        // console.log(app);
        return app; 
      }
      
      
    })
  );
}

getSessionToken(sessionId, time)
{

  let url ="http://ec2-3-87-1-35.compute-1.amazonaws.com:3000/token"
  let obj = {
      "sessionId": sessionId,
       "expireTime": time
      
      };
  console.log("Object: ", obj);
  return this.http.post<any>(url,obj, this.httpOptions).pipe(
    map((token: TokenClass)=>{
      console.log(token.token);
      return token;
    })
  );
}


 createPatient(newPatient):Observable<any>
 {
  const url =this.Java_Host_Port+"/patient/api/createPatient";
  return this.http.post<any>(url,newPatient,this.httpOptions);
}


Login(email,pass):Observable<any>
{
 console.log(email,pass);
 const url =this.Java_Host_Port+"/signIn";
 return this.http.post<any>(url,
  {
    "username": email,
    "password": pass
  },this.httpOptions).pipe(
   map((token)=>
   {
     return new TokenClass(token.token);
   })
 );

}

 gethttpOption() {
   return {
    headers: this.httpGetTokenOptions(this.dataStream.getToken())
  };
 }

httpGetTokenOptions(accessToken) {

  return new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin' :'*',
    "Authorization": "Bearer " + accessToken

  })
};

 getPatientUsingToken(): Observable<any>
 {
   const url =this.Java_Host_Port+"/patient/getCurrentPatientData";
   return this.http.get<any>(url,this.gethttpOption());
 }

  getDoctorList(): Observable<any>
  {
     const url =this.Java_Host_Port+"/DoctorPatient/getMyDoctorList/";
     return this.http.get<any>(url,this.gethttpOption()).pipe(
       flatMap(doctors => doctors),
       map((doctor)=>
       {
         console.log("doctor inside http: ", doctor);
         return new doctorData(doctor[0], doctor[1], doctor[2],
           doctor[3], doctor[4],doctor[5],doctor[6], doctor[7]);
       })
     );
  }


  editPatientProfile(name,age,address){
     let token = this.dataStream.getToken();
     console.log(name,age,address,token);
     const url =this.Java_Host_Port+"/patient/updateProfile";
     return this.http.post<any>(
     url,
     {
       "name":name,
       "age": age,
       "address":address
     } ,this.gethttpOption());

   }

   UplaodingMediaMsg(file,thread)
   {
     console.log("entered");
     console.log("My File is formData:  "+JSON.stringify(file));
     let url = this.Node_host+"api/users/threads/msg/media/"+thread;
     console.log("url: ", url);
   console.log("file of formdata");
   console.log(file.getAll('file'));
   console.log("data of formdata  "+file.getAll('data'));

   return this.http.post<any>(url,
         file);
   }
   editFCMToken(){
     console.log("EDIT FCM TOKEN ");
     const url =this.Java_Host_Port+"/patient/updateToken";

     this.fcm.getToken().then((fcmtoken)=>{
       this.http.post<any>( url,
       {
         "fcmtoken":fcmtoken
       } ,this.gethttpOption()).subscribe(
         (error)=>{
           console.log("error in fcm: ", error);
         },
       ()=>{
         console.log("fcm changed");
       }
     )});
   }
    ProfilegethttpOption() {
        return {
            headers: this.ProfilehttpGetTokenOptions(this.dataStream.getToken())
        };
    }

    ProfilehttpGetTokenOptions(accessToken) {

        return new HttpHeaders({
            "Authorization": "Bearer " + accessToken

        })

    };

    postProfileImage(image:any): Observable<any>{
        console.log("image file data inside http: ", image.getAll('file'));
        const Url =this.Java_Host_Port+"/user/uploadImage";
        console.log("URL",Url);
        let data=JSON.stringify(image.getAll('file'));
        console.log("data",data);
        let auth=this.ProfilegethttpOption();
        console.log(auth);
        return this.http.post<any>(Url, image,auth);

    }
//appointments

getPatientAppointments()
{
  let url = "http://ec2-3-87-1-35.compute-1.amazonaws.com:3000/api/users/patient/schedule/"+this.dataStream.patient.patient_id;
    return this.http.get<any>(url).pipe(
      flatMap(appointments => appointments),
      map((data:patient_appointment)=>
      {
          
          let doctorIndex = this.dataStream.doctorList.findIndex((x)=>x.doctorId ===data.doctor_id);
          data = JSON.parse(JSON.stringify(data));
          data.date= this.format.formateJSONDateToDayMonthYear(data.date);
          // app.appointment.time = this.format.formatJSONTimetoRemoveSeconds(app.appointment.time);
          return new patient_appointment(
            data.appointment_id,
            data.schedule_id,
            data.doctor_id,
              data.patient_id,
              data.date,
              data.start_time,
              data.end_time,
              this.dataStream.doctorList[doctorIndex],
              data.slot_duration                    
            ); 
        
        
      })
    );
  
}



// public getapp(myappointment)
// {
//   return new appointment(myappointment.Id,myappointment.doctorId,myappointment.patientId,myappointment.booked
//     ,myappointment.appointment, myappointment.duration, null); 
// }

getMyDoctorFreeSlotsAppointments(date:string,doctor:doctorData)
{
  // let url = "http://ec2-3-87-1-35.compute-1.amazonaws.com:3000/api/users/doctor/day/slots/"+doctor.doctorId;
//     let obj = {date:"2020-06-07"};

 let url = 'assets/post.json';
// return this.http.post<any>(url,obj,this.httpOptions).
  return this.http.get<any>(url,this.httpOptions).pipe(
      flatMap(appointments => appointments),
      map((appointment:patient_appointment)=>
      {

        let app = JSON.parse(JSON.stringify(appointment));
        app.date = this.format.formateJSONDateToDayMonthYear(app.date);
        if(app.doctor_id==doctor.doctorId) app.doctor = doctor;
        else alert("Errror");
        return app;
      })
    );
}
setappointment(app)
{
  let url = "http://ec2-3-87-1-35.compute-1.amazonaws.com:3000/api/user/patient/appointment/"+ this.dataStream.patient.patient_id;

  // let appointment = JSON.parse(JSON.stringify(app));
  // appointment.date = this.format.formateDateToJSON(appointment.date);
  // appointment.time = this.format.formatTimetoJSONADDSeconds(appointment.start_time);     
  let obj = {
    slot_id: app.appointment_id
  }

  return this.http.put<any>(url,obj,this.httpOptions);

}
}





 








