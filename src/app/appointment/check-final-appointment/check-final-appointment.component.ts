import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { patient_appointment } from 'src/app/model/myAppointmentModel';
import { doctorData } from 'src/app/model/doctorData';
import { InteractionService } from 'src/app/services/datacommunication/interaction.service';
import { NavigationService } from 'src/app/home/NavService/navigation.service';
import { DatastreamingService } from 'src/app/services/datastream/datastreaming.service';


@Component({
  selector: 'app-check-final-appointment',
  templateUrl: './check-final-appointment.component.html',
  styleUrls: ['./check-final-appointment.component.scss'],
})
export class CheckFinalAppointmentComponent {

  appointment : patient_appointment;
  doctor: doctorData;
  patient;
  
  constructor(
    private actionSheetController: ActionSheetController,
    private communication: InteractionService, 
    private navigate: NavigationService, 
    private data: DatastreamingService) { 
  }
  gotIt=false;

ionViewDidEnter()
{
  let that = this;
    this.patient = this.data.patient;

    console.log(this.patient);

    this.communication.observableForAppointment.subscribe(
      (app)=> { 
          that.appointment = app;
          console.log(app);
          this.gotIt=true;
    });
  }


 

  areYousSure()
  {
    this.presentActionSheet();
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Are you sure? ',
      cssClass: 'my-custom-class',
      buttons: [
      {
        text: 'Yes',
        icon: 'happy',
        handler: () => {        
          this.communication.sendAppointment(this.appointment);
          this.navigate.navigateTo('/home/created-appointment');

        }
      },
      {
        text: 'Edit Back',
        icon: 'arrow-back',
        handler: () => {
          this.navigate.navigateTo('/home/patient-book-appointment');
        }
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}

