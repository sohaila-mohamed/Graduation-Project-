import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ActionSheetController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { VitalsComponent } from './vitals/vitals.component';
import { NavigationService } from './NavService/navigation.service';
import { HttpService } from './HttPService/http.service';
import { HttpClientModule } from '@angular/common/http';
import { TabComponent } from './tab/tab.component';
import { FabComponent } from './fab/fab.component';
import { ProfileComponent } from './profile/profile.component';
import { DoctorListComponent } from './doctorList/doctor-list.component';
import { MessageComponent } from './message/message.component';
import { ChatComponent } from './chat/chat.component';
import { ConversationsComponent } from './conversations/conversations.component';
import { ConvListComponent } from './conv-list/conv-list.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AutosizeModule } from 'ngx-autosize';
import {DoctorProfileComponent} from './doctor-profile/doctor-profile.component';
import {NetworkService} from "../services/Network/network.service";
import { VideoComponent } from '../appointment/video/video.component';
import { PatientScheduleComponent } from '../appointment/patient-schedule/patient-schedule.component';
import { BookAppointmentComponent } from '../appointment/book-appointment/book-appointment.component';
import { CreatedAppointmentComponent } from '../appointment/created-appointment/created-appointment.component';
import { CheckFinalAppointmentComponent } from '../appointment/check-final-appointment/check-final-appointment.component';
import { PatientAppointmentComponent } from '../appointment/patient-appointment/patient-appointment.component';
import { InteractionService } from '../services/datacommunication/interaction.service';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    AutosizeModule,
    RouterModule.forChild([
    
      {
        path: 'vitals',
        component: VitalsComponent
      },
      {
        path:'doctorList',
        component: DoctorListComponent

      },
      {
        path:'doctorProfile',
        component:DoctorProfileComponent,
        children:[
            {
              path:'chat',
              component:MessageComponent

        }
        ]
      },
      {
        path:'profile',
        component:ProfileComponent
      } ,   
      {
        path: '',
        component: HomePage
      },
      {
        path: 'message',
        component: MessageComponent
      },
      {
        path: 'chat',
        component: ChatComponent
      } 
      ,
      {
        path: 'schedule',
        component: ScheduleComponent
      } 
      ,
      {
        path: 'conversation',
        component: ConversationsComponent,
        children:[
          {
            path: '',
            component: ConvListComponent
          }
         ]  
      },
      {
        path:'video/:id', 
        component:VideoComponent
      },
     
      {
        path:'patient-schedule',
        component: PatientScheduleComponent
      },
      {
        path:'patient-book-appointment',
        component: BookAppointmentComponent
      },
      {
        path:'created-appointment',
        component: CreatedAppointmentComponent
      },
      {
        path:'check-final-appointment',
        component: CheckFinalAppointmentComponent
      },
      {
        path:'patient-appointment',
        component: PatientAppointmentComponent
      }
      
      
    ])
  ],
  providers: [
    NavigationService,
    HttpService,
    NetworkService,
    InteractionService,
    DatePicker,
    ActionSheetController,
    AndroidPermissions
  ],
  declarations: [HomePage,
    VitalsComponent,
    DoctorListComponent,
    TabComponent,
    FabComponent,
    ProfileComponent,
    MessageComponent,
    ChatComponent,
    ConversationsComponent,
    ConvListComponent,
    ScheduleComponent,
    DoctorProfileComponent,
    PatientScheduleComponent,
    CheckFinalAppointmentComponent,
    CreatedAppointmentComponent,
    VideoComponent,
    BookAppointmentComponent,
    PatientAppointmentComponent
  ]
})
export class HomePageModule {}
