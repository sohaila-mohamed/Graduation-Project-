import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/home/NavService/navigation.service';
import { HttpService } from 'src/app/home/HttPService/http.service';
import { DatastreamingService } from 'src/app/services/datastream/datastreaming.service';
import { MenuController } from '@ionic/angular';
import { AlertController} from '@ionic/angular';
import { timer } from 'rxjs';
import { FCM } from '@ionic-native/fcm/ngx';

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
     private fcm: FCM,
    ) { }
 

    ngOnInit() {
      this.men.enable(false);
    }
   login(email,password)
    {
    // email ="beebz@mail.com";
    // password = "beebz1997";
    let that = this;
    console.log(email,password);
    let  mobile = email.replace(/^0+/, '');
    mobile= "+20"+mobile;
    // Loggining In
    this.http.Login(mobile, password).subscribe( 
       
       res=>{
         // timer
        this.showSplash = true;
        // timer
        timer(10000).subscribe(()=> this.showSplash = false);
        //Use Token To get PatientData
        console.log("Token: "+res.token);
        this.datastream.setToken(res.token);
        
        
        //recieveing Token For Development Only FOR NOW
        this.fcm.getToken().then((fcmtoken)=>{
          this.http.editFCMToken(fcmtoken, res.token).subscribe((data)=>
          {
            console.log(JSON.stringify(data));
          }, 
          err=>{
            alert("ERROR in updating FCM token: "+JSON.stringify(err));

          });

        },
        (err)=>{
          alert("ERROR in getting FCM token: "+JSON.stringify(err));
        });


        this.http.getPatientUsingToken(res.token).subscribe(
            async patientData =>
            {
                console.log("patient: "+JSON.stringify(patientData));
                await that.datastream.setPatient(patientData);
                let vital={weight:"0.00",height:"0.00",BMI:"0.00",body_fats_ratio: "00.0",
                body_water_ratio: "00.0",
                stomic_area_fats: "00.0",
                bone_desity: "00.0",
                muscle_desity: "00.0" };
                console.log(vital);
                this.http.PostVitals(vital,patientData.id).subscribe(
                  postedvitals=>{
                    console.log(postedvitals);
                  }
          
                );


                // console.log('doctorlist');
                // //Get Doctor List
                // await  this.http.getDoctorList(res.token)
                // .subscribe(
                //   async response=>{
                //     console.log("respponce of doctor list");
                //     console.log(JSON.stringify(response));
                //     this.datastream.clearDoctorList();
                //     await response.forEach(element => {                    
                //       this.datastream.addToDoctorList(element);
                //     });                  
                //   }, 
                //   err =>
                //   {
                //     console.log('HTTP Doctor List Error: ', err.error.message);
                //     this.presentAlert('HTTP Doctor List Error: ', err.error.message);
                //   },
                //   () => 
                //   {
                //     this.datastream.saveDoctorListToDataStore();
                //     console.log('HTTP request completed.');
                //   }
                // );


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

    backClick(){
      console.log("must navigate to patient list")
      this.nav.navigateTo('cover');
  
    }
}
