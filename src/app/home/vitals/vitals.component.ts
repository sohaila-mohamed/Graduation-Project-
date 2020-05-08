import { Component, OnInit } from '@angular/core';
import { HttpService } from '../HttPService/http.service';
import { IVital, UpVitals, Ivitals } from '../DataModels';
import { DatastreamingService } from 'src/app/services/datastream/datastreaming.service';
import { NavigationService } from '../NavService/navigation.service';

@Component({
  selector: 'app-vitals',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.scss'],
})

export class VitalsComponent implements OnInit {
 patientId:number;
 vital=new UpVitals;
 vitals=new Ivitals;
 vitalrow :IVital[];

  constructor(private http:HttpService , private patientData:DatastreamingService, private navigation:NavigationService  ) {
    this.patientId=this.patientData.getPatientId();
    console.log("patientID",this.patientId);

   }

  ngOnInit() {
    console.log(this.vitals);
    this.http.GetVitals(this.patientId).subscribe((res)=>{
      console.log("get Vitals ",res);
      this.vitals=res[0];
      console.log(this.vitals);
      this.vitalrow=[{
        label:"Weight",
        place_holder:"Add Weight",
        isDisabled:true,
        icon:"assets/Iconawesome-weight.png",
        name:"weight",
        input:this.vitals.weight},
        {
 
          label:"Height",
          place_holder:"Add Height",
          isDisabled:true,
          icon:"assets/Iconawesome-tape.png",name:"height",
          input:this.vitals.height},
          
          {
         
            label:"BMI",
            place_holder:"Add BMI",
            isDisabled:true,
            icon:"assets/Iconawesome-dumbbell.png",
            name:"BMI",
            input:this.vitals.BMI},
            {
           
              label:"Body Fats Ratio",
              place_holder:"Body Fats Ratio",
              isDisabled:true,
              icon:"assets/Iconawesome-tape.png",
              name:"body_fats_ratio",
              input:this.vitals.body_fats_ratio},
              {
               
                label:"Body Water Ratio",
                place_holder:"Body Water Ratio",
                isDisabled:true,
                icon:"assets/Iconawesome-heartbeat.png",
                name:"body_water_ratio",
                input:this.vitals.body_water_ratio},
                {
                  
                  label:"Stomach Area Fats",
                  place_holder:"Stomach Area Fats",
                  isDisabled:true,
                  icon:"assets/Iconawesome-heartbeat.png",
                  name:"stomic_area_fats",
                  input:this.vitals.stomic_area_fats},
                  {
                   
                    label:"Bone Density",
                    place_holder:"Bone Density",
                    isDisabled:true,
                    icon:"assets/Iconawesome-heartbeat.png",
                    name:"bone_desity",
                    input:this.vitals.bone_desity},
                    {
                   
                      label:"Muscle Density",
                      place_holder:"Muscle Density",
                      isDisabled:true,
                      icon:"assets/Iconawesome-heartbeat.png",
                      name:"muscle_desity",
                      input:this.vitals.muscle_desity}          
      ];








      
    });
 
  }
  
  
  isDisabled=true;
  printvitals(){
    console.log(this.vitals);
  
}
submit(){
  console.log ("Post Vitals");
  this.http.PostVitals(this.vitals,this.patientId).subscribe((res)=>{
    console.log(res);
  });
}
Update(item:any){
 item.isDisabled=false;
 console.log(this.vitals.weight);
 
}
Save(item:any,value:any){
  console.log("Id",this.patientId);
  item.isDisabled=true;
  this.vital.vital_Name=item.name;
  this.vital.new_value=value;
  console.log("Vitals to update",this.vital);
  this.http.PutVital(this.vital,this.patientId).subscribe((res)=>{
    console.log("res",res);

  });
  

  
}

backClick(){
  console.log("must navigate to patient list")
  
  this.navigation.navigateTo('home');
}

}