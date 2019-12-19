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
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { TabComponent } from './tab/tab.component';
import { FabComponent } from './fab/fab.component';
import { ProfileComponent } from './profile/profile.component';

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
        path:'profile',
        component: PatientProfileComponent

      }, 
      {
        path:'Myprofile',
        component:ProfileComponent
      } ,   
      {
        path: '',
        component: HomePage
      }

      
    ])
  ],
  providers: [
    NavigationService,
    HttpService, 
  ],
  declarations: [HomePage,VitalsComponent,PatientProfileComponent,TabComponent,FabComponent,ProfileComponent]
})
export class HomePageModule {}
