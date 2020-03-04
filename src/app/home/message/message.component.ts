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


  private Subject:string;
  private Content:string;
  private Reciever:string;
  private Messages :  newMessage[]=[];
  

  ngOnInit() {
    this.Content="";
    this.Subject="";
    this.Reciever="";
    // this.Messages=[{
    //   sender:"Shrouk",
    //   reciever:"anyone",
    //   Content:"good morning",
    //   subject:"good",
    //   sentAt:123
    // }];
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
    if(this.Reciever==""||this.Content==" "||this.Subject==""){
        this.presentAlert('Can not send message', "Make sure you typed your Subject, Message and choose your Doctor.");
    }
    else{
    this.Messages.push({
        reciever_id :29,
        msg_subject :this.Subject,
        created_date:Date.now().toString(),
        is_readed:0,
        reciever_name:this.Reciever,
        sender_name:"Shrouk",//patient name
        msg_body:this.Content

    });
  console.log(this.Content);
  console.log(this.Messages[0]);
  this.intComp.sendMSG(this.Messages);
  this.navigation.navigateTo('home/chat');

 }

}


async chooseDoctor() {
  const actionSheet = await this.docList.create({
    header: 'You want to send message to:',
    buttons: [{
      text: 'Dr.Mahmoud',//get doctor list
      icon: 'person',
      handler: () => {
        // this.navigation.navigateTo("home/message");
        this.Reciever="Dr.Mahmoud";
        //must be getten from database
      }
    },
     {
      text: 'Dr.Medhat',
      icon: 'person',
      // icon: 'camera',
      handler: () => {
        
        this.Reciever="Dr.Medhat";
        

        // this.navigation.navigateTo("home/schedule");
      }
    }
    ]
  });
  await actionSheet.present();
}
}
