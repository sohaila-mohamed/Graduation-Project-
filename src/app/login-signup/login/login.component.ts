import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/home/NavService/navigation.service';
import { HttpService } from 'src/app/home/HttPService/http.service';
import { DatastreamingService } from 'src/app/services/datastream/datastreaming.service';
import { MenuController } from '@ionic/angular';

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
    ) { }
 

    ngOnInit() {
      this.men.enable(false);
    }


   login(email,password)
    {
      let that = this;
      let  mobile = "+20" +email.replace(/^0+/, '');
      this.http.Login(mobile, password).subscribe( 
       tokenObj=>{      
        this.showSplash = true;

        // timer(10000).subscribe(()=> this.showSplash = false);
        //Use Token To get PatientData
        console.log("Token: ",tokenObj.token);
        this.datastream.setToken(tokenObj.token);
        
        //recieveing Token For Development Only FOR NOW
        this.http.editFCMToken();
       

        this.http.getPatientUsingToken().subscribe(
          patientData =>
          {
                that.datastream.setPatient(patientData.myPatient);
                this.datastream.clearDoctorList();                
                patientData.doctorsArrayList.forEach(element => {                    
                      this.datastream.addToDoctorList(element);
                });                         
          },
          err => {
            this.showSplash = false;
             alert('HTTP Patinet Data Error: '+ err.error.message);  
          },
          () => {
            this.showSplash = false;
            console.log('HTTP get patient data request completed.');
            console.log("patientData.doctorsArrayList: ",that.datastream.getDoctorList());
            console.log("patientData.myPatient Name: ",that.datastream.getPatientName());
            that.nav.navigateTo('home');
          }
        )
      }, 
      err =>{
        this.showSplash = false;
        alert('HTTP Login Error: '+ err.error.message);
        
      },
      () => console.log('HTTP Login request completed.'));
   }



    backClick(){
      console.log("must navigate to patient list")
      this.nav.navigateTo('cover');
  
    }
}
