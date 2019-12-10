import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/home/NavService/navigation.service';
import { HttpService } from 'src/app/home/HttPService/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private nav:NavigationService,
     private http: HttpService
    ) { }

  ngOnInit() {}
 

  login(email,password)
  {
    console.log(email,password);

     this.http.Login(email, password).subscribe(async data=>{
       console.log(data.token);
       await this.http.getPatientUsingToken(data.token).subscribe(
         patientData =>
         {
           console.log("patient: "+patientData)
         }
       )
      this.nav.navigateTo('home');
     });
    }

}
