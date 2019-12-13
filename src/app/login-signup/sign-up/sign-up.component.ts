import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/home/NavService/navigation.service';
import { createPatient } from 'src/app/model/createPatient';
import { HttpService } from 'src/app/home/HttPService/http.service';
import { DatastreamingService } from 'src/app/services/datastream/datastreaming.service';
import { MyPatient } from 'src/app/model/patientData';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  constructor(
    private nav :NavigationService, 
    private http: HttpService,
    private datastream: DatastreamingService,
    
    ) { }

  ngOnInit() {}
  // signup(){
  //   this.nav.navigateTo('home');
  //   console.log("navigate to home module");

  // }

  private patient : MyPatient;

  async signup(first, last,email,password,age,address)
  {
     var newPatient = new createPatient;
     newPatient.name = first+" "+last;
     newPatient.email=email;
     newPatient.password = password;
     newPatient.age= age;
     newPatient.address = address;

     await this.http.createPatient(newPatient).subscribe(data=>{

      this.patient.patient_id = data.patient_id;
      this.patient.name = data.user.name;
      this.patient.user_id = data.user.user_id;
      this.patient.email = data.user.email;
      this.patient.password = data.user.password,
      this.patient.type = data.user.type;
      this.patient.timestamp = data.user.timestamp;
      this.patient.age = data.age;
      this.patient.address=data.address;       
      // this.datastream.setMyPatient(this.patient);
      // console.log("patient: "+data);

     });
    
     this.nav.navigateTo('home');
  }

  // back()
  // {
  //   this.navigate.navigateTo('./cover');
  // }

}
