import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationService } from '../NavService/navigation.service';
import { HttpService } from '../HttPService/http.service';
import { InteractionService } from 'src/app/services/datacommunication/interaction.service';
import { IonContent, ActionSheetController } from '@ionic/angular';
import { doctorData } from 'src/app/model/doctorData';
import { DatastreamingService } from 'src/app/services/datastream/datastreaming.service';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.scss'],
})
export class ConversationsComponent implements OnInit {

  constructor(private navigation: NavigationService
     , private httpService:HttpService
     ,private dataInteraction:InteractionService
     ,private docList:ActionSheetController,
     private datastream: DatastreamingService, 
     private intComp:InteractionService
     ) { }
     
     private doctorRow = new Array<doctorData>();
     private Reciever:string;




  ngOnInit() {
    this.dataInteraction.sendConversationState(0);
    this.doctorRow = this.datastream.getDoctorList(); 
    console.log("doc"+this.doctorRow[0]);
    this.navigation.navigateTo('home/conversation/convList');
  }
  ngAfterViewInit(){
    this.dataInteraction.sendConversationState(0);
    this.doctorRow = this.datastream.getDoctorList(); 
    console.log("doc"+this.doctorRow[0]);
    this.navigation.navigateTo('home/conversation/convList');
  }
  
 inbox(){
  console.log("inbox");
  this.dataInteraction.sendConversationState(0);
 
 }
 sent(){
   console.log("sent");
   this.dataInteraction.sendConversationState(1);

}
back(){
  this.navigation.navigateTo('home');
}
async CreateNew(){
  let actionSheetButtons = [];

  for(let dRow of this.doctorRow){
  actionSheetButtons.push({
      text: 'Dr.'+ dRow.name, //get doctor list
      icon: 'person',
      handler: () => {
        
          // this.Reciever="Dr.Mahmoud";
         this.Reciever= dRow.name;
         console.log("docM"+this.Reciever);
     
        this.intComp.sendDoctorNamefromconvtoMessage(dRow);
        console.log("dRow"+dRow);
        this.navigation.navigateTo("home/message");
      }
  });
}

    
  const actionSheet = await this.docList.create({
    header: 'You want to send message to:',
    
     buttons:  actionSheetButtons 

      //buttons: [{
    //     //  text :'Dr.Mahmoud',  
    //    text: 'Dr.'+ dRow.name, //get doctor list
    //   icon: 'person',
    //   handler: () => {
        
    //       // this.Reciever="Dr.Mahmoud";
    //      this.Reciever= dRow.name;
    //      console.log("docM"+this.Reciever);
     
    //     this.intComp.sendDoctorNamefromHometoMessage(this.doctorRow);
    //     this.navigation.navigateTo("home/message");
        

    //     //must be getten from database
    //   }
    // }
    // ,
    //  {
    //     // text:'Dr.Medhat',
    //     text: 'Dr.'+ this.doctorRow[1].name,
    //    icon: 'person',
    //   // icon: 'camera',
    //   handler: () => {
        
    //     //  this.Reciever="Dr.Medhat";
    //      this.intComp.sendDoctorNamefromHometoMessage(this.doctorRow);
    //    this.Reciever= this.doctorRow[1].name;    
    //      this.navigation.navigateTo("home/message");
    //   }
    // }
    // ]
  
  });
  await actionSheet.present();
}

}
