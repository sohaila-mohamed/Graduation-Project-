import { Component } from '@angular/core';
import { patient_appointment } from 'src/app/model/myAppointmentModel';
import { InteractionService } from 'src/app/services/datacommunication/interaction.service';
import { NavigationService } from 'src/app/home/NavService/navigation.service';
import { HttpService } from 'src/app/home/HttPService/http.service';
import { DatastreamingService } from 'src/app/services/datastream/datastreaming.service';


@Component({
  selector: 'app-created-appointment',
  templateUrl: './created-appointment.component.html',
  styleUrls: ['./created-appointment.component.scss'],
})
export class CreatedAppointmentComponent  {
    patient;
  appointment : patient_appointment;
  spinnerState:boolean=true;

  constructor(
    private interaction: InteractionService, 
    private data : DatastreamingService, 
    private navigate: NavigationService,
    private http:HttpService
  ) {    
    console.log("constructior created");
    this.patient = this.data.patient;
  
  }

ionViewDidEnter()
  {
   console.log("created app ionview ionview");

   this.spinnerState=true;
    console.log(this.patient);
    let that = this;
    this.interaction.observableForAppointment.subscribe((appointment)=>
      {
        console.log(appointment);
        that.appointment = appointment;
        this.http.setappointment(appointment).subscribe(
          (object)=>{
            console.log(object);
          },
          (error)=>{
            console.log("Error in created appointment: ", error);
            this.interaction.sendAppointment(appointment);
            this.navigate.navigateTo('/home/check-final-appointment');
          },
          ()=>{
            console.log("On Complete");
            this.spinnerState=false;
          }
        )
      },
      (error)=>
      {
        console.log("error in appointment:" ,error);
            this.navigate.navigateTo('/home/patient-schedule');
      },
      ()=>{
        this.spinnerState=false;
      });

  }

  
  Close()
  {
    this.navigate.navigateTo('/home')
  }
  // appointment : patient_appointment =
  // {
    
  //     "appointment_id": 40,
  //     "patient_id":87,
  //     "schedule_id": 7,
  //     "doctor_id": 86,
  //     "date": "2021-06-13",
  //     "start_time": "11:00 AM",
  //     "end_time": "11:15 AM",
  //     "slot_duration": 15,
  //     "doctor":
  //     {
  //       "doctorId":86,
  //       "name":"Linda Gadallah",
  //       "fcmtoken":"f4aa0LucrYA:APA91bEDbpqqJH7Mr96OLfJTRIBSsYonWDWiCIEycfYsB-enCJZlgSOuRA8BQMkzxZtHzbRVIkcnb0U2EnB5_2wAfqYyGcnive_oGA0pozwDQ2fNk8it_2Q8fS0iI4Rh484aWrpuo9Jj",
  //       "mobile":"+201151280909",
  //       "years_experience":0,
  //       "relationid":73,
  //       "user_image":"https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"
  //    }
  
  // };

}
