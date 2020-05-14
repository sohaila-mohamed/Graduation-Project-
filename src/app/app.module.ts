import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DatastreamingService } from './services/datastream/datastreaming.service';
import { DatastorageService } from './services/datastorage/datastorage.service';
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule } from '@angular/forms';
import { FCM } from '@ionic-native/fcm/ngx';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './home/HttPService/http.service';
import {Camera} from '@ionic-native/camera/ngx';
import {File} from '@ionic-native/file/ngx';
import {FilePath} from '@ionic-native/file-path/ngx';
import {WebView} from '@ionic-native/ionic-webview/ngx';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), 
    IonicStorageModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    HttpService,
    DatastreamingService,
    DatastorageService,
    FCM,
    Camera,
    File,
    FilePath,
      WebView,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
