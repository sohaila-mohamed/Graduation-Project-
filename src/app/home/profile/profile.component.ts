import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../NavService/navigation.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public cont:number;
  public patient :string;
  constructor(private navigation:NavigationService) { }

  ngOnInit() {
    this.cont =1006455237;
    this.patient="Shrouk";
  }
  backClick(){
    console.log("must navigate to patient list")
    this.navigation.navigateTo('home');

  }
 vitalClick(){
  this.navigation.navigateTo('home/vitals');

 }

}
