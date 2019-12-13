import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { VitalsComponent } from './vitals/vitals.component';
import { NavigationService } from './NavService/navigation.service';
import { HttpService } from './HttPService/http.service';
import { HttpClientModule } from '@angular/common/http';

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
        path: '',
        component: HomePage
      }
    ])
  ],
  providers: [
    NavigationService,
    HttpService, 
  ],
  declarations: [HomePage,VitalsComponent]
})
export class HomePageModule {}
