import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/home/NavService/navigation.service';
import { HttpService } from 'src/app/home/HttPService/http.service';
import { DatastreamingService } from 'src/app/services/datastream/datastreaming.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  constructor(
    private nav:NavigationService,
     private http: HttpService,
     private datastream : DatastreamingService,
     
    ) { }
 


  login(email,password)
  {
    var that = this;
    console.log(email,password);

     this.http.Login(email, password).subscribe(async data=>{
       console.log(data.token);
       
       await this.http.getPatientUsingToken(data.token).subscribe(
         async patientData =>
         {
           
          //  setTimeout(function(){
             console.log("patient: "+JSON.stringify(patientData));
             await that.datastream.setPatient(patientData);
             console.log("login datastream: "+ this.datastream.getPatientName());
             that.nav.navigateTo('home');
          //  },4000);

         }
       )
     });
    }

    // setdata(patientData)
    // {
    //   console.log("hey1");
    //   this.datastream.patient.patient_id = 7;
    //   console.log("hey2");
    //   this.datastream.patient.patient_id =patientData.patient_id;
    //   console.log('hello');
    //   this.datastream.patient.name = patientData.user.name;
    //   this.datastream.patient.user_id = patientData.user.user_id;
    //   this.datastream.patient.email = patientData.user.email;
    //   this.datastream.patient.password = patientData.user.password,
    //   this.datastream.patient.type = patientData.user.type;
    //   this.datastream.patient.timestamp = patientData.user.timestamp;
    //   this.datastream.patient.age = patientData.age;
    //   this.datastream.patient.address=patientData.address;
    // }
}
