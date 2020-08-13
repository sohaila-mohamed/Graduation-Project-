import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/home/HttPService/http.service';
import { InteractionService } from 'src/app/services/datacommunication/interaction.service';
import { DateFormatService } from 'src/app/services/dateFormatService/date-format.service';
import { NavigationService } from 'src/app/home/NavService/navigation.service';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { doctorData } from 'src/app/model/doctorData';


@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss'],
})
export class BookAppointmentComponent  implements OnInit{
  showSplash=true;
  slots=false;
  constructor(
    private http: HttpService,
    private dataCom : InteractionService,
    private navigate: NavigationService,
  ) { 
  }

  appointments;
  today;
  doctor: doctorData =null; 

  date;
  
  @ViewChild('dateTime',{static: false}) sTime;

  openStart()
  {
      this.sTime.open();

  }
 
  
 
  ionChange(value)
  {
    // console.log(this.appointments);
    let date = value.slice(0,10);
    // console.log(date);
    let that = this;
    this.http.getMyDoctorFreeSlotsAppointments(date,this.doctor).subscribe(
      (appointment)=>{
        
        that.appointments.push(appointment);
      }, 
      (error)=>{
          console.log("erre: in ionChange:" , error);
      },
      ()=>{
        this.date = date;
  
      });

  }
 
  ionCancel(value)
  {
    this.navigate.navigateTo('/home/patient-schedule');
  }

  array:Array<any>=[];
  ngOnInit() {    
    
    this.appointments=[];

    this.today= new Date().toJSON();    
    
    this.showSplash=false;
    this.array =[];
    let that = this;
    console.log("entered");
    this.dataCom.observableForBookAppointment.subscribe( (doctor)=>{
      that.doctor=doctor;
      console.log("Got Doctor", doctor);

      console.log("docotr came: ", that.doctor.name);

       that.http.getDoctorSlot(that.doctor.doctorId).subscribe(
        (appointment)=>{
          // console.log("appointment inside book: ",appointment);
          if(appointment) 
          {that.array.push(appointment);
          }
        },
        (error)=>{
            console.log("Error", error);
        }, 
        ()=>
        {
          that.appointments = that.array; 
      
          that.showSplash=false;
        }
      );
    });

       console.log("appointments");
          console.log(that.appointments);



  }


  chooseAppointment(appointment)
  {
    console.log(this.doctor);
    appointment.doctor= this.doctor;
    console.log("APPOINTMENT: ", appointment);
    this.dataCom.sendAppointment(appointment);
    this.navigate.navigateTo('/home/check-final-appointment');
  }
  


  
}
