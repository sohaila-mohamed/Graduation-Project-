import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/home/NavService/navigation.service';
import { HttpService } from 'src/app/home/HttPService/http.service';
import { DatastreamingService } from 'src/app/services/datastream/datastreaming.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(
    private nav:NavigationService,
     private http: HttpService,
     private datastream : DatastreamingService,
     private men:MenuController,
     
    ) { }
 

    ngOnInit() {
      this.men.enable(false);
    }
  login(email,password)
  {
    var that = this;
    console.log(email,password);
    
     this.http.Login(email, password).subscribe(
       
       res=>{
       console.log("Token: "+res.token);
       this.datastream.setToken(res.token);
        this.http.getPatientUsingToken(res.token).subscribe(
         async patientData =>
         {
             console.log("patient: "+JSON.stringify(patientData));
             await that.datastream.setPatient(patientData);
             console.log("login Patient Name: "+ this.datastream.getPatientName());
             that.nav.navigateTo('home');
         }
       )
      }, 
      err => console.log('HTTP Error', err.error.message),
      () => console.log('HTTP request completed.')
      
     );
    }

 
}
