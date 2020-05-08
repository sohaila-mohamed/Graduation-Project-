import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/home/NavService/navigation.service';
import { createPatient } from 'src/app/model/createPatient';
import { MenuController } from '@ionic/angular';
import { FCM } from '@ionic-native/fcm/ngx';
import { HttpService } from 'src/app/home/HttPService/http.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent  implements OnInit{
  patient_Data:any;
  error: string;
  visibleError:boolean;
  showSplash: boolean=false;
  constructor(
    private men:MenuController,
    private nav :NavigationService, 
    private http: HttpService,
    public fcm : FCM,

    ) { 
      this.visibleError=false;
    }
    
    ngOnInit() {
      this.men.enable(false);
    }


  
  signup(first, last, mobile,password,age,address)
  {
      let fcmtoken='heello';
      // this.fcm.getToken().then((token)=>{
      //   fcmtoken= token;
      // },
      // (err)=>{
      //   alert("ERROR in getting FCM token: "+JSON.stringify(err));
      // });

    let newPatient = this.createNewPatient(first, last, mobile,password,age,address, fcmtoken);
    this.addPatientToDatabase(newPatient);
       
  }
  createNewPatient(first, last, mobile,password,age,address, fcmtoken)
  {
    mobile = mobile.toString();
    mobile = mobile.replace(/^0+/, '');
    mobile= "+20"+mobile;
    return new createPatient(first+" " +last, mobile,password,age,address, fcmtoken);
  }

  addPatientToDatabase(newPatient)
  {     
    this.showSplash = false;
     console.log(newPatient);
     let that = this;
     this.http.createPatient(newPatient).subscribe(
       (data)=>{            this.showSplash = false
        this.showSplash = true;

         console.log("Entered Created  Patient: ", data);
       },
      (err)=> alert('HTTP create patient Error: '+ err.error.message),
      () => {       
        this.showSplash = false; 
        that.nav.navigateTo('cover/login');
        console.log('HTTP Create Patient request completed.');
      });
  
  }
  

  backClick(){
    console.log("must navigate to patient list")
    this.nav.navigateTo('cover');

  }




      

}
