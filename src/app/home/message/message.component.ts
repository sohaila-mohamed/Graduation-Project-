import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/datacommunication/interaction.service';
import { NavigationService } from '../NavService/navigation.service';
import { newMessage } from 'src/app/model/newMessage';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {


  constructor(private navigation:NavigationService,
  private intComp: InteractionService,
  private docList:ActionSheetController,
  private addController : AlertController) {

   }


  private Subject_from_input:string;
  private Content_from_text_area:string;
  private Reciever_from_dr_list:string;
  private newMessages :  newMessage[]=[];
  private newList:any;

  ngOnInit() {
    const that=this;
    this.intComp.msg.subscribe(
    (dataList)=> { 
      console.log(dataList);
      that.newMessages=dataList;
      console.log("tpe msg  "+that.newMessages);
      // that.Messages.push(massage);
      // console.log("arra "+that.Messages);
      that.setMessege();
     
    });
    this.Content_from_text_area="";
    this.Subject_from_input="";
    this.Reciever_from_dr_list="";
    // this.Messages=[{
    //   sender:"Shrouk",
    //   reciever:"anyone",
    //   Content:"good morning",
    //   subject:"good",
    //   sentAt:123
    // }];
  }
  setMessege(){
    this.newList=this.newMessages[0];
    console.log("list "+this.newList)
    //go to messages
    // // this.isRendered=true;
    // // *ngIf="isRendered"

    // console.log("type myMsgs is "+typeof(this.myMsgs));

    // console.log("myMsgs",this.myMsgs);
    // this.currentUser=this.myMsgs.sender_name;
    // this.currentUser2=this.myMsgs.reciever_name;
    

  }
  async presentAlert(subtitleString:string,messageString:string) {
    const alert = await this.addController.create({
      header: 'ERROR',
      subHeader: subtitleString,
      message: messageString,
      buttons: ['OK']
    });
  
    await alert.present();
  }
  send(){
    if(this.Reciever_from_dr_list==""||this.Content_from_text_area==""||this.Subject_from_input==""){
        this.presentAlert('Can not send message', "Make sure you typed your Subject, Message and choose your Doctor.");
    }
    else{
    this.newMessages.push({
        reciever_id :12,
        msg_subject :this.Subject_from_input,
        created_date:Date.now().toString(),
        is_readed:0,
        reciever_name:this.Reciever_from_dr_list,
        sender_name:"Shrouk",
        msg_body:this.Content_from_text_area

    });
  console.log(this.Content_from_text_area);
  console.log(this.newMessages[0]);
  this.intComp.sendMSG(this.newMessages);
  //http service to  create new thread 
  this.navigation.navigateTo('home/chat');

 }
 console.log(this.Content_from_text_area);
}


async chooseDoctor() {
  const actionSheet = await this.docList.create({
    header: 'You want to send message to:',
    buttons: [{
      text: 'Dr.Mahmoud',//get doctor list
      icon: 'person',
      handler: () => {
        // this.navigation.navigateTo("home/message");
        this.Reciever_from_dr_list="Dr.Mahmoud";
        //must be getten from database
      }
    },
     {
      text: 'Dr.Medhat',
      icon: 'person',
      // icon: 'camera',
      handler: () => {
        
        this.Reciever_from_dr_list="Dr.Medhat";
        

        // this.navigation.navigateTo("home/schedule");
      }
    }
    ]
  });
  await actionSheet.present();
}
}
