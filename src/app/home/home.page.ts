import { Component, OnInit } from '@angular/core';

import { NavigationService } from './NavService/navigation.service';
import { DatastreamingService } from '../services/datastream/datastreaming.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  patientName: String;
  

 

  constructor(private navigation:NavigationService, private datastream: DatastreamingService) {}


    ngOnInit()
    {
      this.patientName="sohaila";
      console.log("homepage");
      // this.patientName =this.datastream.getPatientName();
      // if(this.patientName==undefined )
      // {
      //   console.log("this.datastream.getPatientName()==undefined ");
      //   this.navigation.navigateTo('cover');
      // } 
    }


      clear()
      {
        this.datastream.clearData();
        this.navigation.navigateTo('cover');
      }

    
  NavigateMe(path:string){
    this.navigation.navigateTo(path);
    console.log("navigate to ", path);

  }

}
