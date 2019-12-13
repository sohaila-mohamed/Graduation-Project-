import { Component, OnInit } from '@angular/core';

import { NavigationService } from './NavService/navigation.service';
import { DatastreamingService } from '../services/datastream/datastreaming.service';
import { MyPatient } from '../model/patientData';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  patientName: String;
  
  constructor(
    private navigation:NavigationService,
    private datastream: DatastreamingService,
    ) { }

    ngOnInit()
    {
     console.log("patinet home page");
       this.patientName =  this.datastream.getPatientName();
       console.log("PatientName: " + this.patientName);  
     }
 

  GoToVitals(){
    this.navigation.navigateTo('home/vitals');
    console.log("navigate to vitals function");

  }

}
