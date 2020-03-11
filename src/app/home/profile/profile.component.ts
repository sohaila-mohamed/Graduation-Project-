import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../NavService/navigation.service';
import { timer } from 'rxjs';
import { DatastreamingService } from 'src/app/services/datastream/datastreaming.service';
import { HttpService } from '../HttPService/http.service';
import { AlertController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { __await } from 'tslib';
import { InteractionService } from 'src/app/services/datacommunication/interaction.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  private myAge:number;
  private mobile:String;
  private myName:String;
  private patientAge:number;
  private patientName:String;
  private patientAddress:String;
  private myAddress:String;
  private notEnable: boolean;
  private code :any;
  private showSplash: boolean; 

  constructor(private navigation:NavigationService,
    private datastream: DatastreamingService,
    private editPatientService: HttpService,
    private savedata:AlertController,
    private commuincation:InteractionService
    ) { }

  ngOnInit() {
    // async () => 
    //       {
    //         console.log('get data');
    //         await  this.datastream.getPatientName()
                  
    //              async response=>{
    //                   this.patientName =this.datastream.getPatientName();
    //                   this.patientAge =this.datastream.getPatientAge();
    //                  this.patientAddress=this.datastream.getPatientAddress();

    //                 };
    // }
   console.log('get data');
   this.notEnable=true;
    // this.showSplash = true;
    // timer(3000).subscribe(()=> this.showSplash = false);
    // this.patientName =this.datastream.getPatientName();
    this.patientName =this.datastream.getPatientName();
    this.patientAge =this.datastream.getPatientAge();
    this.patientAddress=this.datastream.getPatientAddress();
    this.mobile = this.datastream.getPatientMobile();
    this.code="patient1";
  
    console.log("name  "+this.patientName)
    console.log("myAge "+ this.patientAge);
    console.log("myName "+ this.myName);
   
                  
    
  }
  backClick(){
    console.log("must navigate to patient list")
    this.navigation.navigateTo('home');

  }
 vitalClick(){
  this.navigation.navigateTo('home/vitals');

 }
 edit(){
  this.notEnable=false;
  // this.patientName="";
  // this.patientAge=null;
  // this.patientAddress="";
  // this.myAddress="";
  // this.myAge=null;
  // this.myName="";
  console.log("myAge "+ this.myAge);
  console.log("myName "+ this.myName);

 }
 editName(name){
   this.commuincation.UpdateName(name);

 }
 
async save(name: String,age: number, address:String, token: String){
  
  const alert =this.savedata.create({
    header: 'Are you sure you want to save edits?',
    animated :true,
  
    buttons:
    
     [ {text:'Cancel',
    
     handler: async => {
        this.patientName="";
        this.patientAge=null;
        this.patientAddress="";
        this.myName = this.datastream.getPatientName();
        this.myAge = this.datastream.getPatientAge();
        this.myAddress=this.datastream.getPatientAddress();
        this.notEnable=true;
 
     }
      },
       {
      text:'Save',
      
      handler: async => {
         
        this.notEnable=true;
        token = this.datastream.getToken();
        console.log("myAge "+ age);
        console.log("myName "+ name);
        console.log("myAddress "+ address);
         this.editPatientService.editPatientProfile(name,age,address,token).subscribe(
       response=>{
      // this.datastream.setToken(response.token);

      console.log("http request to Change patient Data: "+ JSON.stringify(response));
      this.datastream.changePatientData(name,age,address);
      

    }, 
    err =>
    {
      console.log('HTTP Edit profile Error: ', err.error.message);
    });

  }
      
   
  }
    
   
  ]
  });

   (await alert).present();
  }

 changeName(){
  this.patientName="";
  // this.myName="";
  
 }
 changeAge(){
  this.patientAge=null;
  // this.myAge=null;

  
 }
 changeAddress(){
  this.patientAddress="";
  // this.myAddress="";


  
 }

}
