import { Component,ViewChild, ElementRef, OnInit } from '@angular/core';
import { HttpService } from '../HttPService/http.service';
import { Iconvs, Reply } from '../DataModels';
import { DatastreamingService } from 'src/app/services/datastream/datastreaming.service';
import { InteractionService } from 'src/app/services/datacommunication/interaction.service';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { newMessage } from 'src/app/model/newMessage';
import { IonContent } from '@ionic/angular';
import { eventMethod } from '@ionic/core/dist/types/utils/overlays';

@Component({
  selector: 'app-conv-list',
  templateUrl: './conv-list.component.html',
  styleUrls: ['./conv-list.component.scss'],
})
export class ConvListComponent implements OnInit {
  private convList:Iconvs[];
  private patientId:number;
  private data :Reply;
  private thread:newMessage;
  private page:number;
  private scrollPosition:number;
  private state:number;
  @ViewChild(IonContent,{static:false}) ionContent: IonContent;


  constructor(private httpService:HttpService,private patientData:DatastreamingService,private dateInteraction:InteractionService) {
    console.log("Constructor");

   }

  ngOnInit() {
    console.log("oninit");
    console.log("this.scrolling",this.scrollPosition);
    this.patientId=this.patientData.getPatientId();
    console.log("patient_id",this.patientId);
    this.dateInteraction.currentStateConversation.subscribe(state=>{
      this.page=0;
      this.state=state;
      if(this.state==0){
        console.log("page",this.page);
        console.log("interaction works");
        this.httpService.getInbox(this.patientId,this.page).subscribe((res)=>{
          console.log("inbox ",res);
          this.convList=res;
          console.log("list ",this.convList);
    
        });
      }
      else{
        console.log("page",this.page);
        this.httpService.getSent(this.patientId,this.page).subscribe((res)=>{
          console.log("sent ",res);
          this.convList=res;
          console.log("list sent",this.convList);
    
        });

      }
      
///////////////////////////////////////////////////////////      
/////////// to create new thread 
     this.thread={
        reciever_id   :  29,
        msg_subject   :  "postman4",
        created_date  :  "2020-02-02",
        is_readed     :  0,
        reciever_name :  "sohaila",
        sender_name   :  "ahmed",
        msg_body      :  "Hello Doctor i want...."

      }
      this.data={
        sender_id:this.patientId,
        reciever_id:this.thread.reciever_id,
        msg_body:this.thread.msg_body,
        created_date:this.thread.created_date,
      };
      this.httpService.postThread(this.thread,this.patientId).subscribe((res)=>{
        console.log("new thread data",res);
        
      this.httpService.postReply(this.data,res.insertId).subscribe((msg)=>{
        console.log("first thread message",msg);

      });


        
      });

////////////////////////////////////////////////////////////




    });


  }
  
  ngAfterViewInit(){
    this.dateInteraction.currentStateConversation.subscribe(state=>{
      console.log("ngviewtinit");
      this.ionContent.scrollToTop();
    });

  }
 
loadData(event){
  console.log("scrolling NOw")
  this.page=this.page+10;
  console.log("event",event);
    if(this.state==0){
      console.log("page",this.page);
      console.log("interaction works");
      this.httpService.getInbox(this.patientId,this.page).subscribe((res)=>{
        console.log("inbox ",res);
        res.forEach(element => {
          this.convList.push(element);
          
        });
        event.target.complete();
        return;
  
      });
    }
    else{
      console.log("page",this.page);
      this.httpService.getSent(this.patientId,this.page).subscribe((res)=>{
        console.log("sent ",res);
        res.forEach(element => {
          this.convList.push(element);
          
        });
        
        event.target.complete();
        console.log("New list sent",this.convList);
        return;
  
      });
      

    }
  
  
  


    }
//////////////////////////////////////////////////////////////////  
  // //////// to reply on specific thread 
  // reply(thread_id){
  //   console.log(thread_id);
  //   let date=new Date().toLocaleString();

  //   console.log("current date ",new Date().toLocaleString());
  //   this.data={
  //       sender_id:patient_id,
  //       reciever_id:this.Doctor_id,
  //       msg_body:"Okay, you can change the potato with salad and some fruits you love , i wish uou happy day, thanks. you can change the potato with salad and some fruits you love , i wish uou happy day, thanks. you can change the potato with salad and some fruits you love , i wish uou happy day, thanks. you can change the potato with salad and some fruits you love , i wish uou happy day, thanks. you can change the potato with salad and some fruits you love , i wish uou happy day, thanks.",
  //       created_date:date,

  //   }
  //     this.httpService.postReply(this.data,thread_id).subscribe((res)=>{
  //       console.log("posted",res);
  //     });
  // }
  /////////////////////////////////////////////////////////////////////////

}
