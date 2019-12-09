import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/home/NavService/navigation.service';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss'],
})
export class CoverComponent implements OnInit {

  constructor(private nav:NavigationService) { }

  ngOnInit() {}
  
  signup()
  {
    this.nav.navigateTo('/cover/signup');
  }
  login()
  {
    this.nav.navigateTo('/cover/login');
  }

}
