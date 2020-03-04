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
  private data :newMessage;
  constructor(private httpService:HttpService,private patientData:DatastreamingService,private dateInteraction:InteractionService) {

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
      // this.data={
      //         reciever_id :29,
      //         msg_subject :"postman3",
      //         created_date:"2020-03-04",
      //         is_readed:0,
      //         reciever_name:"sohaila",
      //         sender_name:"ahmed",
      //         msg_body:"can i ask ...."
      // };
      // this.httpService.postThread(this.data,28).subscribe((res)=>{
      //   console.log("posted",res);
      // });

    });

  
  }

}
