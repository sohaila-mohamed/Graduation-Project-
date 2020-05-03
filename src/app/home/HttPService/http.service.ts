import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UpVitals, Reply } from '../DataModels';
import { newMessage } from 'src/app/model/newMessage';
import { DatastreamingService } from 'src/app/services/datastream/datastreaming.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  Java_Host_Port ="http://localhost:8080";

// Java_Host_Port ="http://ec2-3-86-89-133.compute-1.amazonaws.com:8080";

  Node_host ="http://ec2-3-87-1-35.compute-1.amazonaws.com:3000/";


  constructor(private http:HttpClient,
    private dataStream: DatastreamingService) { 
    
  }
 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin' :'*'
 
    })
  };
  //-------------------------------------------------------------------------------
  addDoctor(code,token):Observable<any>
  {
    const httpOption = {
      headers: this.httpGetTokenOptions(token)
    };  

    const url =this.Java_Host_Port+"/DoctorPatient/addMyDoctor";
    return this.http.post<any>(
      url,
      {
      "code":code
      }
    ,httpOption);

  } 
  
  createPatient(newPatient):Observable<any>
 {
  console.log("da5lt")

  const url =this.Java_Host_Port+"/patient/api/createPatient";
  return this.http.post<any>(url,newPatient,this.httpOptions);
// .toPromise()
// .then(data => {
//   console.log("da5lr")
//   console.log(data);
// }).catch(error => {
//   console.log("EROOR: " +error.status);
// });
}


Login(email,pass):Observable<any>
{
 console.log("d5lt")

 const url =this.Java_Host_Port+"/signIn";
return this.http.post<any>(url,
  {
    "username": email,
    "password": pass
  },this.httpOptions);

}


httpGetTokenOptions(accessToken) {

  return new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin' :'*',
    "Authorization": "Bearer " + accessToken

  })
};


 getPatientUsingToken(token): Observable<any>
 {
  const httpOption = {
    headers: this.httpGetTokenOptions(token)
  };
  const url =this.Java_Host_Port+"/patient/getCurrentPatientData";
  
  return this.http.get<any>(url,httpOption);

 }

  getDoctorList(token): Observable<any>
  {
  const httpOption = {
    headers: this.httpGetTokenOptions(token)
  };
  const url =this.Java_Host_Port+"/DoctorPatient/getMyDoctorList/";
  return this.http.get<any>(url,httpOption);

  }

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
    
  editPatientProfile(name,age,address,token){
     console.log(name,age,address,token) 
     const httpOption = {
     headers: this.httpGetTokenOptions(token)
    };  
     const url =this.Java_Host_Port+"/patient/updateProfile";
     return this.http.post<any>(
      url,
      {
        "name":name, 
        "age": age,
        "address":address
      } ,httpOption);

      

  }
  
  editFCMToken(fcmtoken, token){
    const httpOption = {
    headers: this.httpGetTokenOptions(token)
   };  

    const url =this.Java_Host_Port+"/patient/updateToken";
    return this.http.post<any>(
     url,
     {
       "fcmtoken":fcmtoken
     } ,httpOption);

     

 }
 getInbox(user_id,offset){
  const Url =this.Node_host+"api/users/threads/inbox/"+this.dataStream.getPatientId()+"/"+offset;
  console.log("URL",Url);
  return this.http.get<any>(Url, this.httpOptions);

 }
 getSent(user_id,offset){
  const Url =this.Node_host+"api/users/threads/sent/"+this.dataStream.getPatientId()+"/"+offset;
  console.log("URL",Url);
  return this.http.get<any>(Url, this.httpOptions);
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
  console.log("JSON Thread_data",reply);
  console.log("URL",Url);
  return this.http.post<any>(Url, reply, this.httpOptions);
 }
 getReplies(thread_id,offset){
  const Url =this.Node_host+"api/users/threads/replies/"+thread_id+"/"+offset;
  console.log("URL",Url);
  return this.http.get<any>(Url, this.httpOptions);

 }

}





 








