import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/home/NavService/navigation.service';
import { createPatient } from 'src/app/model/createPatient';
import { HttpService } from 'src/app/home/HttPService/http.service';
import { MenuController } from '@ionic/angular';
import { AlertController} from '@ionic/angular';
import { FCM } from '@ionic-native/fcm/ngx';
import { DatastorageService } from 'src/app/services/datastorage/datastorage.service';
import { DatastreamingService } from 'src/app/services/datastream/datastreaming.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent  implements OnInit{
  patient_Data:any;
  error: string;
  visibleError:boolean;

  constructor(
    private men:MenuController,
    private nav :NavigationService, 
    private http: HttpService,
    private addController : AlertController,
    public fcm : FCM,

    ) { 
      this.visibleError=false;
    }
    
    ngOnInit() {
      this.men.enable(false);
    }


    checkCredentials(Password, Password2, age)
      {
        if(Password==Password2)
        {
          if(age>120 || age<0)
          {
            this.visibleError=true;
            this.error = "The Provided age is not possible";
            return false;
          }
          else
          {
            return true;
          }
        }
        else{
          
          this.visibleError=true;
          this.error = "The Two Passwords are Not Equal";
          return false;
        }
      
      }
  
  async signup(first, last, mobile,email,password, password2,age,address)
  {
    
    let fcmtoken = localStorage.getItem("fcmToken");
    // console.log("fcmtoken in SIGN Up: "+ fcmtoken)
    if(this.checkCredentials(password,password2,age))
    {
      let newPatient = this.createNewPatient(first, last, mobile,email,password,age,address, fcmtoken);
      this.addPatientToDatabase(newPatient);
    }     
  }
  createNewPatient(first, last, mobile,email,password,age,address, fcmtoken)
  {
    mobile = mobile.toString();
    mobile = mobile.replace(/^0+/, '');
    mobile= "+20"+mobile;
    return new createPatient(first+" " +last, mobile,email,password,age,address, fcmtoken);
  }

  addPatientToDatabase(newPatient)
  {
     
     let that = this;
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

  backClick(){
    console.log("must navigate to patient list")
    this.nav.navigateTo('cover');

  }




      

}
