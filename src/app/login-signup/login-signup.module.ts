
import { CoverComponent } from './cover/cover.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../home/NavService/navigation.service';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpService } from '../home/HttPService/http.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild([
    
      {
        path: 'cover',
        component: CoverComponent
      },
      {
        path: '',
        component: CoverComponent
      },
      {
        path:'login',
        component:LoginComponent

      },
      {
        path:'signup',
        component:SignUpComponent

      }
    ])
  ],
  providers: [
    NavigationService,
    HttpClient,
    HttpService,
   
    
  ],
  declarations: [CoverComponent,LoginComponent,SignUpComponent]
})
export class LoginSignupModule { }
