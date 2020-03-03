import { Component, OnInit } from '@angular/core';
import { HttpService } from '../HttPService/http.service';
import { Iconvs } from '../DataModels';
import { DatastreamingService } from 'src/app/services/datastream/datastreaming.service';
import { InteractionService } from 'src/app/services/datacommunication/interaction.service';

@Component({
  selector: 'app-conv-list',
  templateUrl: './conv-list.component.html',
  styleUrls: ['./conv-list.component.scss'],
})
export class ConvListComponent implements OnInit {
  private convList:Iconvs[];
  private patientId:number;

  constructor(private httpService:HttpService,private patientData:DatastreamingService,private dateInteraction:InteractionService) {

   }

  ngOnInit() {
    this.patientId=this.patientData.getPatientId();
    this.dateInteraction.currentStateConversation.subscribe(state=>{
      if(state==0){
        console.log("interaction works");
        this.httpService.getInbox(29,0).subscribe((res)=>{
          console.log("inbox ",res);
          this.convList=res;
          console.log("list ",this.convList);
    
        });
      }
      else{
        this.httpService.getSent(31,0).subscribe((res)=>{
          console.log("inbox ",res);
          this.convList=res;
          console.log("list ",this.convList);
    
        });

      }
    });

  
  }

}
