import { Component, OnInit } from '@angular/core';
import { HttpService } from '../HttPService/http.service';
import { Iconvs } from '../DataModels';
import { DatastreamingService } from 'src/app/services/datastream/datastreaming.service';
import { InteractionService } from 'src/app/services/datacommunication/interaction.service';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { newMessage } from 'src/app/model/newMessage';

@Component({
  selector: 'app-conv-list',
  templateUrl: './conv-list.component.html',
  styleUrls: ['./conv-list.component.scss'],
})
export class ConvListComponent implements OnInit {
  private convList:Iconvs[];
  private patientId:number;
  private data : newMessage;
  private dataObject :any;
  constructor(private httpService:HttpService,
    private patientData:DatastreamingService,
    private dateInteraction:InteractionService,
    private intComp: InteractionService) {

   }

  ngOnInit() {
    this.patientId=this.patientData.getPatientId();
    this.dateInteraction.currentStateConversation.subscribe(state=>{
      if(state==0){
        console.log("interaction works");
        this.httpService.getInbox(32,0).subscribe((res)=>{
          console.log("inbox ",res);
          this.convList=res;
          console.log("list ",this.convList);
    
        });
      }
      else{
        this.httpService.getSent(28,0).subscribe((res)=>{
          console.log("sent ",res);
          this.convList=res;
          console.log("list ",this.convList);
    
        });

      }
      //create object from convlis hen send it to message
      this.dataObject= this.convList[0];

      this.data={
              reciever_id :this.dataObject.reciever_id,
              msg_subject :this.dataObject.msg_subject,
              created_date:this.dataObject.created_date,
              is_readed:this.dataObject.is_readed,
              reciever_name:this.dataObject.reciever_name,
              sender_name:this.dataObject.sender_name,
              msg_body:this.dataObject.msg_body
      };
      this.intComp.sendMSG(this.data);
      // this.httpService.postThread(this.data,28).subscribe((res)=>{
      //   console.log("posted",res);
      // });

    });

  
  }

}
