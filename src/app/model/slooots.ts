import { doctorData } from './doctorData';


export class slots {
 
  slot_id:number;
  // schedule_id: number;
  // doctor_id:number;
    date:string;
    start_time:string;
    end_time:string;
    // doctor: doctorData;
    slot_duration: number;

    constructor(
      slot_id?:number,
      // schedule_id?: number,
      // doctor_id?:number,
        // patient_id?:number,
        date?:string,
        start_time?:string,
        end_time?:string,
        // doctor?: doctorData,
        slot_duration?: number
    ) {    
      this.slot_id = slot_id;
      // this.doctor_id=doctor_id;
      // this.schedule_id = schedule_id;
      this.date=date;
      this.start_time=start_time;
      this.end_time = end_time;
      this.slot_duration = slot_duration;
      // this.doctor = doctor;
    
    } 
}

