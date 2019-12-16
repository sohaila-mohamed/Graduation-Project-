import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MyPatient } from 'src/app/model/patientData';
import { tokenName } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class DatastorageService {

  constructor(
    private storage: Storage,
    ){}

    savePatientLocally(patient:MyPatient)
    {  
      this.storage.set('patient',patient);
    }
    saveTokenLocally(token:String)
    {  
      console.log("data store save token locally");
      this.storage.set('token', token);
    }

     getMyPatientData()
    {
      return  this.storage.get('patient');
    }
     getPatientToken():Promise<any>
    {
      return  this.storage.get('token');
    }
    async isTokenExpired()
    {
      var bool = true;
      console.log("is token expired");
      var that = this;
      await this.getPatientToken().then(token=>
        {
          if(token!=null)
            {
                var obj = that.parseJwt(token);
                if(obj.exp > Date.now()/1000)
                {
                  bool= false;
                  console.log("obj.exp > Date.now()/1000 || "+ bool);

                }
            }
            
        });
      return bool;
    }
    parseJwt (token) {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse(window.atob(base64));
  }


  clear()
  {
    this.storage.set('token',null);
    this.storage.set('patient',null);
  }
}


  

