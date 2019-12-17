import { Component, OnInit } from '@angular/core';
import { IDoctor } from '../DataModels';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.scss'],
})
export class PatientProfileComponent implements OnInit {
  doctorRow:IDoctor[]=[
    {name:'Mahmoud Ismail',img:'assets/doctor1.jpeg'},
    {name:'Mahmoud Ismail',img:'assets/doctor1.jpeg'},
    {name:'Mahmoud Ismail',img:'assets/doctor1.jpeg'},
    {name:'Mahmoud Ismail',img:'assets/doctor1.jpeg'},
    {name:'Mahmoud Ismail',img:'assets/doctor1.jpeg'}



  

  
  
  
  
  
  
  ];
  constructor() { }
 
  ngOnInit() {}

}
