import { Component, OnInit } from '@angular/core';
// import { IDoctor } from '../DataModels';
import { DatastreamingService } from 'src/app/services/datastream/datastreaming.service';
import { doctorData } from 'src/app/model/doctorData';


@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss'],
})
export class DoctorListComponent implements OnInit {
  // doctorRow:IDoctor[]=[
  //   {name:'Mahmoud Ismail',img:'assets/doctor1.jpeg'},
  //   {name:'Mahmoud Ismail',img:'assets/doctor1.jpeg'},
  //   {name:'Mahmoud Ismail',img:'assets/doctor1.jpeg'},
  //   {name:'Mahmoud Ismail',img:'assets/doctor1.jpeg'},
  //   {name:'Mahmoud Ismail',img:'assets/doctor1.jpeg'}
  // ];
  doctorRow = new Array<doctorData>();
  constructor(private datastream : DatastreamingService,
    ) {
      this.doctorRow = this.datastream.getDoctorList();      
     } 
  ngOnInit() {}

}
