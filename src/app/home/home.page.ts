import { Component, OnInit } from '@angular/core';

import { NavigationService } from './NavService/navigation.service';
import { DatastreamingService } from '../services/datastream/datastreaming.service';
import { AlertController} from '@ionic/angular';
import { HttpService } from './HttPService/http.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  patientName: String;
  val: string;
  // timer
  showSplash 
  constructor(
    private navigation:NavigationService, 
    private datastream: DatastreamingService, 
    private http: HttpService,
    private add : AlertController
    ) {
    }


    ngOnInit()
    {
      console.log("homepage");
      this.patientName =this.datastream.getPatientName();
      // if(this.patientName==undefined )
      // {
      //   console.log("this.datastream.getPatientName()==undefined ");
      //   this.navigation.navigateTo('cover');
      // }  
      console.log("getDocList");

      this.getDocList();
    }

getDocList()
{
  console.log("get Doctor List");
  const token = this.datastream.getToken();
  console.log("Token to get doctor list in home page: ",token);
      this.http.getDoctorList(token,this.datastream.getPatientId())
      .subscribe(
        response=>{
          response.forEach(element => {
            this.datastream.addToDoctorList(element);
          });
        }, 
        err =>
        {
          console.log('HTTP Error: ', err.error.message);
        },
        () => 
        {
          console.log('HTTP request completed.');
        }
      );
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


  


  async addDoctor(){
  
    const alert =this.add.create({
      header: 'Add your Doctor',
      animated :true,
      message: 'Enter code you got from your doctor.',
      inputs:[{
      type: "text",
      name:'val',
      value :""
      
      
      }],
      cssClass: "Dark",
      buttons:
      
       [{
        text:'Add',
        
        handler: async data => {
         console.log("code: " + data.val);
         await this.http.addDoctor(data.val,this.datastream.getPatientId(),this.datastream.getToken())
        .subscribe(
          response=>{
            this.NavigateMe('home/profile')
            console.log("http request to add doctor responce: "+ JSON.stringify(response));

          }, 
          err =>
          {
            console.log('HTTP Error', err.error.message);
          },
          () => 
          {
            console.log('HTTP request completed.');
           }
        );
         
        
          
          
  
        }
    },
      
      {text:'Cancel',
      role: 'cancel'
       }
    ]
    });
  
     (await alert).present();
    }

}
