import { Component, OnInit } from '@angular/core';
import { HttpService } from '../HttPService/http.service';
import { IVital, UpVitals } from '../DataModels';
import { DatastorageService } from 'src/app/services/datastorage/datastorage.service';
import { DatastreamingService } from 'src/app/services/datastream/datastreaming.service';

@Component({
  selector: 'app-vitals',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.scss'],
})
export class VitalsComponent implements OnInit {
 patientId:number;
  constructor(private http:HttpService , private patient:DatastreamingService ) {
        this.patientId=patient.getPatientId();
   }
  vitalrow:IVital[]=[{
    vital_name:"vitals.weight",
    label:"Weight",
    place_holder:"Add Weight",
    isDisabled:true,
    icon:"assets/Iconawesome-weight.png",
    name:"weight"},{
      vital_name:"vitals.height",
      label:"Height",
      place_holder:"Add Height",
      isDisabled:true,
      icon:"assets/Iconawesome-tape.png",name:"height"},
      
      {
        vital_name:"vitals.BMI",
        label:"BMI",
        place_holder:"Add BMI",
        isDisabled:true,
        icon:"assets/Iconawesome-dumbbell.png",
      name:"BMI"},
        {
          vital_name:"vitals.waist_circumference",
          label:"Waist Circumference",
          place_holder:"Add Waist Circumference",
          isDisabled:true,
          icon:"assets/Iconawesome-tape.png",name:"waist_circumference"},
          {
            vital_name:"vitals.blood-type",
            label:"Blood Type",
            place_holder:"Add Blood Type",
            isDisabled:true,
            icon:"assets/Iconawesome-heartbeat.png",name:"blood_type"}
          
  ];

  
  vital=new UpVitals;
  

  ngOnInit() {}
  vitals={
    blood_type:" ",
    blood_presure:null,
    weight:null,
    height:null,
    BMI:null,
    waist_circumference:null
  }
  isDisabled=true;
  printvitals(){
    console.log(this.vitals);
  
}
submit(){
  this.http.PostVitals(this.vitals,this.patientId).subscribe((res)=>{
    console.log(res);
  });
}
Update(item:any){
 item.isDisabled=false;
 
}
Save(item:any,value:any){
  item.isDisabled=true;
  this.vital.name=item.name;
  this.vital.value=value;
  console.log(this.vital);
  let updateData=JSON.stringify(this.vital);
  console.log(updateData);
  this.http.PostVitals(updateData,this.patientId).subscribe((res)=>{
    console.log("res",res);

  });

  
}

}
