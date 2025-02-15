import {Component, OnDestroy} from '@angular/core';
import { NavigationService } from '../NavService/navigation.service';
import { HttpService } from '../HttPService/http.service';
import { InteractionService } from 'src/app/services/datacommunication/interaction.service';
import { ActionSheetController} from '@ionic/angular';
import { doctorData } from 'src/app/model/doctorData';
import { DatastreamingService } from 'src/app/services/datastream/datastreaming.service';
import {EventEmitterService} from "../../services/EventEmitterService/event-emitter.service";
import {__await} from "tslib";


@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.scss'],
})
export class ConversationsComponent implements OnDestroy {
    constructor(private navigation: NavigationService
     , private httpService:HttpService
     ,private dataInteraction:InteractionService
     ,private docList:ActionSheetController,
     private datastream: DatastreamingService,
     private  eventEmitterService:EventEmitterService,
     private intComp:InteractionService
     ) {
      console.log("conversations component constructor");
  }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         private doctorRow = new Array<doctorData>();
     private Receiver:string;
     private state:number=0;








     ionViewDidEnter() {

    console.log("conversation component ion view did enter ");
    this.doctorRow = this.datastream.getDoctorList();
    console.log("doctors array"+this.doctorRow[0]);


  }

 inbox(){
     console.log("inbox");
     this.state=0;
     this.eventEmitterService.OnComponentCall(0);
     console.log("inbox button triggered the state Function");


 }
 sent(){
     this.state=1;
   console.log("sent");
   this.eventEmitterService.OnComponentCall(1);
   console.log("sent button triggered the state Function ");
}
back(){
  this.navigation.navigateTo('home');

}
ngOnDestroy(){
        console.log(" conversation destroyed");
    }
async CreateNew(){
  let actionSheetButtons = [];

  for(let dRow of this.doctorRow){
  actionSheetButtons.push({
      text: 'Dr.'+ dRow.name, //get doctor list
      icon: 'person',
      handler: () => {

          // this.Reciever="Dr.Mahmoud";
         this.Receiver= dRow.name;
         console.log("docM"+this.Receiver);

        this.intComp.sendDoctorNamefromconvtoMessage(dRow);
        console.log("dRow"+dRow);
        actionSheet.dismiss().then(()=>this.navigation.navigateTo("home/message"));
      }
  });
}


  const actionSheet = await this.docList.create({
    header: 'You want to send message to:',

     buttons:  actionSheetButtons



  });
  await actionSheet.present();
}

}
