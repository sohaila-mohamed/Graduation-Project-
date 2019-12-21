import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/home/NavService/navigation.service';
import { createPatient } from 'src/app/model/createPatient';
import { HttpService } from 'src/app/home/HttPService/http.service';
import { DatastreamingService } from 'src/app/services/datastream/datastreaming.service';
import { MyPatient } from 'src/app/model/patientData';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent  implements OnInit{

  constructor(
    private men:MenuController,
    private nav :NavigationService, 
    private http: HttpService,
    private datastream: DatastreamingService,
    ) { }
    
    ngOnInit() {
      this.men.enable(false);
    }


  signup(first, last,email,password,age,address)
  {
     var newPatient = new createPatient;
     newPatient.name = first+" "+last;
     newPatient.email=email;
     newPatient.password = password;
     newPatient.age= age;
     newPatient.address = address;
     var that = this;
     this.http.createPatient(newPatient).subscribe(
       async patientData=>{

      console.log("patient: "+JSON.stringify(patientData));
      await that.datastream.setPatient(patientData);
      console.log("signup Patient Name: "+ this.datastream.getPatientName());
      that.nav.navigateTo('home');

     }, 
      err => console.log('HTTP Error', err.error.message),
      () => console.log('HTTP request completed.')
      
     
     );
    
  }

  

}
