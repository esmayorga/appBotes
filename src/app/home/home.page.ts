import { Component, OnInit } from '@angular/core';
import { OperacionesService } from '../services/operaciones.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  constructor(public operaciones: OperacionesService)  { }
  slideOps = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400
  };

  slides = [
    {
      imagen: 'https://imagenes.cosasdebarcos.com/barcosOcasion/9/7/1/4/dufour-arpege-82865020120151656970555050504570x.jpg',
      description: 'imagen uno del barco el velero'
  },
  {
    imagen: 'https://sentialternativa.com.ar/wp-content/uploads/2018/09/Copie-2-de-DSCN1406-Copier-Copier.jpg',
    description: 'imagen dos del barco el velero'
  },
  {
    imagen: 'https://lh3.googleusercontent.com/proxy/P2aQnzwHw1n4VDjmqIqBDMNbdJUSXNSoGkoPghbW7Dwj4dVWKSn4yf124sWnBQkoZpB9yhia2nshrAAXxk6BoXU3AT8PriZ_6AO-3RvRBEwcw7D1gw',
    description: 'imagen tres del barco el velero'
  }
];


  ngOnInit() {
    /*
    this.operaciones.getUsesr().subscribe(user => {
      console.log(user);
    });*/
  }
}

