import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/home/NavService/navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private nav:NavigationService) { }

  ngOnInit() {}
  login(){
    this.nav.navigateTo('home');
    console.log("navigate to home module");

  }
  // login(email,password)
  // {

  //    this.http.Login(email, password).subscribe(async data=>{
  //      console.log(data);
  //      await this.http.getPatientUsingToken(data.token).subscribe(
  //        patientData =>
  //        {
  //           this.dataService.patient_id=patientData.patient_id;
  //           this.dataService.user.user_id = patientData.user.user_id;
  //           this.dataService.user.name = patientData.user.name
  //           this.dataService.user.email =patientData.user.email
  //           this.dataService.user.password= patientData.user.password
  //           this.dataService.user.type= patientData.user.type
  //           this.dataService.user.timestamp = patientData.user.timestamp
  //           this.dataService.age = patientData.age
  //           this.dataService.address = patientData.address
  //        }
  //      )
  //     this.navigate.navigateTo("./patienthome")
  //    });




     
  // }

}
