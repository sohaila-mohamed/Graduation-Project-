import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  Java_Host_Port = "http://907185e5.ngrok.io";

  localhost ="http://localhost:3000/";
  constructor(private http:HttpClient) { }

 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin' :'*'
 
    })
  };

  PostVitals(vitals:any): Observable<any>{
    const Url ='https://452ebf1b.ngrok.io/api/users/vitals/12';
    return this.http.post<any>(Url, vitals, this.httpOptions);
  }
  //-------------------------------------------------------------------------------
  

  createPatient(newPatient):Observable<any>
 {
  console.log("da5lr")

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
}




//  httpOptions = {
//    headers: new HttpHeaders({
//      'Content-Type':  'application/json',
//      'Access-Control-Allow-Origin' :'*'

//    })
//  };


 








