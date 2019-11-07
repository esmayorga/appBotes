import { Component } from '@angular/core';
import { Plugins } from "@capacitor/core";

const { Geolocation } = Plugins;

@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})
export class SportsPage {
  currentCenter:any;
  coordinates: any[] = [];
  defaultZoom  = 14;



ionViewDidEnter(){
  this.getCurrentPosotion();
  this.watchPosition();

}

constructor() { }

async getCurrentPosotion(){
  const coordinates = await Geolocation.getCurrentPosition();
  this.currentCenter = {
   lat: coordinates.coords.latitude,
   lng: coordinates.coords.longitude
  };

  this.coordinates.push ({
    lat: coordinates.coords.latitude,
    lng: coordinates.coords.longitude
   });



}

watchPosition(){
  Geolocation.watchPosition({}, position => {
    this.currentCenter = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }

  })

}




 
}
