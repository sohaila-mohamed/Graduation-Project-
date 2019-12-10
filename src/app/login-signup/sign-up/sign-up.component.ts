import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/home/NavService/navigation.service';
import { createPatient } from 'src/app/model/createPatient';
import { HttpService } from 'src/app/home/HttPService/http.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  constructor(private nav :NavigationService, 
    private http: HttpService) { }

  ngOnInit() {}
  // signup(){
  //   this.nav.navigateTo('home');
  //   console.log("navigate to home module");

  // }
  async signup(first, last,email,password,age,address)
  {
     var newPatient = new createPatient;
     newPatient.name = first+" "+last;
     newPatient.email=email;
     newPatient.password = password;
     newPatient.age= age;
     newPatient.address = address;

     await this.http.createPatient(newPatient).subscribe(data=>{
       console.log(data)
     })
     this.nav.navigateTo('home');
     
  }

  // back()
  // {
  //   this.navigate.navigateTo('./cover');
  // }

}
