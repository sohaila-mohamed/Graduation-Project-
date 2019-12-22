import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  Java_Host_Port = "https://d16bd106.ngrok.io";
 

  Node_host ="https://18d87a45.ngrok.io/";
  constructor(private http:HttpClient) { 
    
  }

 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin' :'*'
 
    })
  };
  PostVitals(vital:any,id:number): Observable<any>{
    const Url =this.Node_host+"api/users/vitals/"+id;
    
    console.log("URL",Url);
    return this.http.post<any>(Url, vital, this.httpOptions);
  }
  //-------------------------------------------------------------------------------
  addDoctor(code, patientId,token):Observable<any>
  {
    console.log("post request called");
    console.log(code+" || " + patientId+ " || "+ token);
    const httpOption = {
      headers: this.httpGetTokenOptions(token)
    };  

    const url =this.Java_Host_Port+"/DoctorPatient/addDoctor";
    return this.http.post<any>(
      url,
      {
      "code":code, 
      "patientId":patientId
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

  getDoctorList(token,patientId): Observable<any>
  {
  const httpOption = {
    headers: this.httpGetTokenOptions(token)
  };
  const url =this.Java_Host_Port+"/DoctorPatient/getPatientDoctors/"+patientId;
  return this.http.get<any>(url,httpOption);

  }
  

}

//  httpOptions = {
//    headers: new HttpHeaders({
//      'Content-Type':  'application/json',
//      'Access-Control-Allow-Origin' :'*'

//    })
//  };


 








