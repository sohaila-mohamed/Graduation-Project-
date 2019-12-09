import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  localhost ="http://localhost:3000/";
  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':"*",
      'Content-Type':  'application/json'

    })
  };
  PostVitals(vitals:any): Observable<any>{
    const Url ='https://452ebf1b.ngrok.io/api/users/vitals/12';
    return this.http.post<any>(Url, vitals, this.httpOptions);
  }
}

