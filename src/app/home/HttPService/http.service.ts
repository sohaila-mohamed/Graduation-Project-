import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
 
  Java_Host_Port = "http://ec2-3-82-157-215.compute-1.amazonaws.com:8080";

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
  

}




 








