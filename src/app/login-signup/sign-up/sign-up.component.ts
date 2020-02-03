import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/home/NavService/navigation.service';
import { createPatient } from 'src/app/model/createPatient';
import { HttpService } from 'src/app/home/HttPService/http.service';
import { MenuController } from '@ionic/angular';
import { AlertController} from '@ionic/angular';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent  implements OnInit{
  patient_Data:any;
  constructor(
    private men:MenuController,
    private nav :NavigationService, 
    private http: HttpService,
    private addController : AlertController,

    ) { }
    
    ngOnInit() {
      this.men.enable(false);
    }


  signup(first, last,email,password,age,address)
  {
     var newPatient = new createPatient;
     newPatient.name = first+" "+last;
     newPatient.email=email;
     newPatient.password = password;
     newPatient.age= age;
     newPatient.address = address;
     this.addPatientToDatabase(newPatient);
     
  }

  addPatientToDatabase(newPatient)
  {
     
     var that = this;
     this.http.createPatient(newPatient).subscribe(
        async patientData=>{
          this.patient_Data=patientData;
        console.log("patient: "+JSON.stringify(patientData));
        that.nav.navigateTo('cover/login');

     }, 
      err =>
      {
        this.presentAlert('HTTP create patient Error: ', err.error.message);

      },
      () => {console.log('HTTP request completed.');
      let vital={weight:"0.00",height:"0.00",BMI:"0.00",body_fats_ratio: "00.0",
      body_water_ratio: "00.0",
      stomic_area_fats: "00.0",
      bone_desity: "00.0",
      muscle_desity: "00.0" };
      console.log(vital);
      this.http.PostVitals(vital,this.patient_Data.id).subscribe(
        postedvitals=>{
          console.log(postedvitals);
        }

      );}
      
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
