import { Component } from '@angular/core';

import { Navigation } from 'selenium-webdriver';
import { NavigationService } from './NavService/navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navigation:NavigationService) {}
  NavigateMe(path:string){
    this.navigation.navigateTo(path);
    console.log("navigate to ", path);

  }

}
