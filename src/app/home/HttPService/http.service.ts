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
  PostVitals(vital:any): Observable<any>{
    const Url ="http://localhost:3000/api/users/vitals/12";
    return this.http.put<any>(Url, vital, this.httpOptions);
  }
}

