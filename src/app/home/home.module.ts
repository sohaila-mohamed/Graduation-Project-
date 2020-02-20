import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
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
        path:'Myprofile',
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
        path: 'conversation',
        component: ConversationsComponent
      }
      ,
      {
        path: 'convList',
        component: ConvListComponent
      }

      
    ])
  ],
  providers: [
    NavigationService,
    HttpService, 
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
    ConvListComponent
  ]
})
export class HomePageModule {}
