import { Component, OnInit } from '@angular/core';
// import { IDoctor } from '../DataModels';
import { DatastreamingService } from 'src/app/services/datastream/datastreaming.service';
import { NavigationService } from '../NavService/navigation.service';
import { doctorData } from 'src/app/model/doctorData';
import { HttpService } from '../HttPService/http.service';


@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss'],
})
export class DoctorListComponent {

  doctorArrayList=new Array<doctorData>();
  doctorRow = new Array<doctorData>();
  constructor(
    private datastream : DatastreamingService, 
    private navigation : NavigationService,
    private http: HttpService
    ) {
      // this.doctorRow = this.datastream.getDoctorList();     
     } 

    
     ionViewWillEnter() {
       //Get Doctor List                    
      
       this.datastream.clearDoctorList();

       this.http.getDoctorList()
                .subscribe(
                   (doctor)=>{

                    this.datastream.doctorList.push(doctor);

                  }, 
                  err =>
                  {
                    console.log('HTTP Doctor List Error: ', err.error.message);
                    alert('HTTP Doctor List Error: '+ err.error.message);
                  },
                  () => 
                  {
                    this.doctorRow = this.datastream.getDoctorList();
                    this.doctorArrayList = this.doctorRow;
                    this.datastream.saveDoctorListToDataStore();
                    console.log('HTTP request completed.');
                  }
                );

  
   
   
   
     }
   
   
     initializeList(){
       this.doctorArrayList = this.doctorRow;
     }
   
     filterList(event) {  
       this.initializeList();
   
       const searchTerm = event.srcElement.value;
     
       if (!searchTerm) { //if the user didn't input anything
         return;
       }
     
       this.doctorArrayList = this.doctorArrayList.filter(currentGoal => {
         if (currentGoal.name && searchTerm) {
           if (currentGoal.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
             return true;
           }
           return false;
         }
       });
     }
   
  backClick(){
    console.log("must navigate to patient list")
    this.navigation.navigateTo('home');

  }
 
}
