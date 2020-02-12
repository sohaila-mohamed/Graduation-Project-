import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpService } from './home/HttPService/http.service';
import { DatastreamingService } from './services/datastream/datastreaming.service';
import { DatastorageService } from './services/datastorage/datastorage.service';
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), 
    IonicStorageModule.forRoot(),
    AppRoutingModule,FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    HttpService,
    DatastreamingService,
    DatastorageService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
