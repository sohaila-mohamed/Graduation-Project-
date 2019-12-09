import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/home/NavService/navigation.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  constructor(private nav :NavigationService) { }

  ngOnInit() {}
  signup(){
    this.nav.navigateTo('home');
    console.log("navigate to home module");

  }
  // signUp(first, last,email,password,age,address)
  // {
  //    var newPatient = new createPatient;
  //    newPatient.name = first+" "+last;
  //    newPatient.email=email;
  //    newPatient.password = password;
  //    newPatient.age= age;
  //    newPatient.address = address;

  //    this.http.createPatient(newPatient).subscribe(data=>{
  //      console.log(data)
  //    })
     
  // }

  // back()
  // {
  //   this.navigate.navigateTo('./cover');
  // }

}
