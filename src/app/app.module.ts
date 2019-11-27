import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { SongsModalPageModule } from './songs-modal/songs-modal.module';

// importando la libreria de Google Maps
import { AgmCoreModule } from "@agm/core";
import { environment } from 'src/environments/environment.prod';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  // agrega la la parte de storage
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SongsModalPageModule, 
    IonicStorageModule.forRoot(),
    // pego en la parte de los imports para Google Maps
    AgmCoreModule.forRoot({
      apiKey: environment.mapsKeyApi
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
