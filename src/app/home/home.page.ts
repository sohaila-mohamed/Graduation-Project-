import { Component, OnInit } from '@angular/core';

import { NavigationService } from './NavService/navigation.service';
import { DatastreamingService } from '../services/datastream/datastreaming.service';
import { AlertController, ActionSheetController} from '@ionic/angular';
import { HttpService } from './HttPService/http.service';
import { timer } from 'rxjs';


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
    private addController : AlertController,
    private docList:ActionSheetController
    ) {
    }


    ngOnInit()
    {
      this.patientName =this.datastream.getPatientName();
      if(this.patientName==undefined )
      {
        this.presentAlert('HTTP DataStream Error: ', "My Patient Name is Null");
        console.log("this.datastream.getPatientName()==undefined ");
        this.navigation.navigateTo('cover');
      }  
      this.getDocList();
    }

getDocList()
{
  const token = this.datastream.getToken();
  console.log("Token to get doctor list in home page: ",token);
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

  async presentAlert(subtitleString:string,messageString:string) {
    const alert = await this.addController.create({
      header: 'ERROR',
      subHeader: subtitleString,
      message: messageString,
      buttons: ['OK']
    });

    await alert.present();
  }

  


  async addDoctor(){
  
    const alert =this.addController.create({
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
        var token = this.datastream.getToken();
        console.log("code: " + data.val);
        await this.http.addDoctor(data.val,token)
        .subscribe(
          response=>{
          
            
            console.log("http request to add doctor responce: "+ JSON.stringify(response));

          }, 
          err =>
          {
            this.presentAlert('HTTP Add Doctor Error: ', err.error.message);
          },
          async () => 
          {
            console.log('HTTP request completed.');
            //Get Doctor List
            await  this.http.getDoctorList(token)
                  .subscribe(
                    async response=>{
                     // timer
                     this.showSplash = true;
                     // timer
                    timer(10000).subscribe(()=> this.showSplash = false);
                    
                      // this.datastream.getPatientAge();
                      // this.datastream.getPatientAddress();
                      // this.datastream.getPatientName();
                      this.datastream.clearDoctorList();
                      await response.forEach(element => {
                        this.datastream.addToDoctorList(element);
                        
                      }); 
                      await this.datastream.saveDoctorListToDataStore();
                      console.log('HTTP request completed.');
                      this.navigation.navigateTo('home/doctorList');                 
                    }, 
                    err =>
                    {
                      console.log('HTTP Doctor List Error: ', err.error.message);
                      this.presentAlert('HTTP Doctor List Error: ', err.error.message);
                    },
                   
                  );
  
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
    async newMessage() {
      const actionSheet = await this.docList.create({
        header: 'Send Message To:',
        buttons: [{
          text: 'Dr.Mahmoud',//get doctor list
          // role: 'destructive',
          icon: 'chatbubbles',
          handler: () => {
            console.log('Delete clicked');
            this.navigation.navigateTo("home/message");
          }
        }, {
          text: 'Dr.Mohamed',
          icon: 'chatbubbles',
          // icon: 'call',
          handler: () => {
            console.log('Share clicked');
            this.navigation.navigateTo("home/message");
          }
        }, {
          text: 'Dr.Medhat',
          icon: 'chatbubbles',
          // icon: 'camera',
          handler: () => {
            console.log('Play clicked');
            this.navigation.navigateTo("home/message");
          }
        }
        ]
      });
      await actionSheet.present();
    }
  
  

}
