import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { patient_appointment } from 'src/app/model/myAppointmentModel';
import { doctorData } from 'src/app/model/doctorData';
import { InteractionService } from 'src/app/services/datacommunication/interaction.service';
import { DateFormatService } from 'src/app/services/dateFormatService/date-format.service';
import { NavigationService } from 'src/app/home/NavService/navigation.service';



@Component({
  selector: 'app-patient-appointment',
  templateUrl: './patient-appointment.component.html',
  styleUrls: ['./patient-appointment.component.scss'],
})
export class PatientAppointmentComponent {

  appointment : patient_appointment;
  doctor: doctorData;
  // isdisabled:boolean;

  today;
  
  constructor(
    private communication: InteractionService, 
    private format: DateFormatService,
    private router: Router,
    private navigate: NavigationService
    ) {

    }

    video()
    {
      this.router.navigate(['home/video', 1]);
    }
    audio()
    {
      this.router.navigate(['home/video', 2]);
    }

    isdisabled(time)
    {
      if(this.timeLeft)
      {
        return false;
      }
      else
      {
        return true;
      }
    }
 
timeLeft;

  isToday(date)
  {
    return date == this.today;
  }
  
  
  close()
  {
    this.navigate.navigateTo('/home')
  }
ionViewDidEnter()
{    
  this.today= this.format.formateJSONDateToDayMonthYear(new Date().toJSON().slice(0,10));

  // this.isdisabled=true;
  let that = this;

    this.communication.observableForAppointment.subscribe(
      (app)=> { 
      that.appointment = app;
      that.timeLeft=that.format.returnStringDescripingCurrentSituation(
        that.appointment.start_time,1);


    });
  }



}

