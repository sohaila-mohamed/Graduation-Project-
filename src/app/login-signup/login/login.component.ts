import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/home/NavService/navigation.service';
import { HttpService } from 'src/app/home/HttPService/http.service';
import { DatastreamingService } from 'src/app/services/datastream/datastreaming.service';
import { MenuController } from '@ionic/angular';
import { AlertController} from '@ionic/angular';
import { timer } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  showSplash: boolean;

  constructor(
    private nav:NavigationService,
     private http: HttpService,
     private datastream : DatastreamingService,
     private men:MenuController,
     private addController : AlertController,
     
    ) { }
 

    ngOnInit() {
      this.men.enable(false);
    }
   login(email,password)
    {
    // email ="beebz@mail.com";
    // password = "beebz1997";
    var that = this;
    console.log(email,password);
    
    // Loggining In
    this.http.Login(email, password).subscribe( 
       
       res=>{
         // timer
        this.showSplash = true;
        // timer
        timer(10000).subscribe(()=> this.showSplash = false);
        //Use Token To get PatientData
        console.log("Token: "+res.token);
        this.datastream.setToken(res.token);
        
        this.http.getPatientUsingToken(res.token).subscribe(
            async patientData =>
            {
                console.log("patient: "+JSON.stringify(patientData));
                await that.datastream.setPatient(patientData);

                //Get Doctor List
                await  this.http.getDoctorList(res.token)
                .subscribe(
                  async response=>{
                    this.datastream.clearDoctorList();
                    await response.forEach(element => {
                      this.datastream.addToDoctorList(element);
                    });                  
                  }, 
                  err =>
                  {
                    console.log('HTTP Doctor List Error: ', err.error.message);
                    this.presentAlert('HTTP Doctor List Error: ', err.error.message);
                  },
                  () => 
                  {
                    this.datastream.saveDoctorListToDataStore();
                    console.log('HTTP request completed.');
                  }
                );


            that.nav.navigateTo('home');
          },
          err => {
             this.presentAlert('HTTP Patinet Data Error: ', err.error.message);
            
          },
          () => console.log('HTTP get patient data request completed.')

        )
      }, 
      err =>{
        this.presentAlert('HTTP Login Error: ', err.error.message);
        
      },
      () => console.log('HTTP Login request completed.')
      
     );
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

 
}
