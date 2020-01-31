import { Component, OnInit } from '@angular/core';
// import { IDoctor } from '../DataModels';
import { DatastreamingService } from 'src/app/services/datastream/datastreaming.service';
import { doctorData } from 'src/app/model/doctorData';
import { NavigationService } from '../NavService/navigation.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.scss'],
})
export class PatientProfileComponent implements OnInit {
  // doctorRow:IDoctor[]=[
  //   {name:'Mahmoud Ismail',img:'assets/doctor1.jpeg'},
  //   {name:'Mahmoud Ismail',img:'assets/doctor1.jpeg'},
  //   {name:'Mahmoud Ismail',img:'assets/doctor1.jpeg'},
  //   {name:'Mahmoud Ismail',img:'assets/doctor1.jpeg'},
  //   {name:'Mahmoud Ismail',img:'assets/doctor1.jpeg'}
  // ];
  doctorRow = new Array<doctorData>();
  constructor(private datastream : DatastreamingService, private navigation : NavigationService
    ) {
      this.doctorRow = this.datastream.getDoctorList();      
     } 
  ngOnInit() {}
  backClick(){
    console.log("must navigate to patient list")
    this.navigation.navigateTo('home');

  }
}
