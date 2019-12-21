import { Component, OnInit } from '@angular/core';

import { NavigationService } from './NavService/navigation.service';
import { DatastreamingService } from '../services/datastream/datastreaming.service';
import { AlertController} from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  patientName: String;
  val: string;

 

  constructor(private navigation:NavigationService, private datastream: DatastreamingService,
    private add : AlertController) {}


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
        
        handler: data => {
         this.NavigateMe('home/profile')
        
          console.log(data.val);
          
  
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
