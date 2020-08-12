import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/home/HttPService/http.service';
import { NavigationService } from 'src/app/home/NavService/navigation.service';
import { ActionSheetController } from '@ionic/angular';
import { InteractionService } from 'src/app/services/datacommunication/interaction.service';
import { DateFormatService } from 'src/app/services/dateFormatService/date-format.service';
import { DatastreamingService } from 'src/app/services/datastream/datastreaming.service';
// import { DataService } from '../dataService/data.service';

@Component({
  selector: 'app-patient-schedule',
  templateUrl: './patient-schedule.component.html',
  styleUrls: ['./patient-schedule.component.scss'],
})
export class PatientScheduleComponent {
  appointments=[];
  // toggleState=true;
  array:Array<any>=[];
  num:number=0;
  today;
  constructor(
      private http :HttpService,
      public navigate: NavigationService,
      private data: DatastreamingService,
      public actionSheetController: ActionSheetController,
      private comm: InteractionService,
      private format: DateFormatService
      ) {

    }


    
  async ionViewWillEnter()
  {
    this.today= this.format.formateJSONDateToDayMonthYear(new Date().toJSON().slice(0,10));    
    this.array=[];
    this.appointments=[];
    var that = this;
    await this.http.getPatientAppointments().subscribe((appointment)=>{
     
      that.array.push(appointment);
    },(error)=>{
      console.log("error: ", error);
    },
    ()=>
    {
      this.appointments = this.array;
      this.tabClick(this.num);  
     
    });

  
  }
  checkIfEqualToday(num)
  {
    if(this.num==num) return true;
    else return false;
  }

  sendAndNavigate(app)
  {
    this.comm.sendAppointment(app);
    this.navigate.navigateTo('/home/patient-appointment')
  }
  tabClick(num)
  {
    this.num=num;
    this.getAppointmentsOfTheDay(num);
  }

  getAppointmentsOfTheDay(num)
  {   
    this.appointments=[];

    this.array.forEach(element => {
      if(this.switch(num,element.date))
      {
        this.appointments.push(element);
      }
    });
  }

  checkOnSoon(date, time)
  {
    if(date==this.today)
    {
      
      return this.format.returnStringDescripingCurrentSituation(time,3);
    }  
    return null;
  }
  switch(num,date)
  {
    let mynum = this.format.compareDate(this.today, date);
    return num == mynum;
  }
  // toggleContent(event)
  // {
  //   this.toggleState = event;
  // }

  async CreateNew(){
    let actionSheetButtons = [];
  
    for(let dRow of this.data.doctorList){
    actionSheetButtons.push({
        text: 'Dr. '+ dRow.name, //get doctor list
        icon: 'person',
        handler: () => {
          this.comm.sendDoctorForBookedAppointment(dRow);
          actionSheet.dismiss().then(()=>this.navigate.navigateTo("/home/patient-book-appointment"));
        }
    });
  }
  
  
    const actionSheet = await this.actionSheetController.create({
      header: 'You want to send message to:',
  
       buttons:  actionSheetButtons
  
  
  
    });
    await actionSheet.present();
  }
  
}
