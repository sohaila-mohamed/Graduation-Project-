import { Component, OnInit } from '@angular/core';
import { HttpService } from '../HttPService/http.service';

@Component({
  selector: 'app-vitals',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.scss'],
})
export class VitalsComponent implements OnInit {

  constructor(private http:HttpService) { }

  ngOnInit() {}
  vitals={
    blood_type:" ",
    blood_presure:null,
    weight:null,
    height:null,
    BMI:null,
    waist_circumference:null
  }
  printvitals(){
    console.log(this.vitals);
  
}
submit(){
  this.http.PostVitals(this.vitals).subscribe((res)=>{
    console.log(res);
  });
}

}
