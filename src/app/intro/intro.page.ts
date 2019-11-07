import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Storage} from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage  {

  slideOps = {
    // comience en el primer slide
    initialSlide: 0,
    // que se permita un solo slide
    slidesPerView: 1,
    // centar los slide
    centeredSlides: true,
    // velocidad de cada slide
    speed: 400
  };

  slides = [
    {
      title: 'Hola ¡nos encanta conocerte!',
      subTitle: '',
      description: '',
      icon: ''
  },
  {
    title: '¡Bienvenido a nuestra app!',
    subTitle: 'Aeroclub Guaymaral',
    description: 'Tenemos funciones asombrosas que esperan por ti ',
    icon: 'play'

  },
  {
    title: '¡Acede rápidamente a nuestros servicios Principales!',
    subTitle: '',
    description: 'Reserva y compra  de vuelos desde la pantalla de inicio de tu app',
    icon: 'play'
  }
];

  constructor(private router: Router, private storage: Storage) { }

  finish() {
    this.storage.set('isIntroShowed', true);
    this.router.navigateByUrl('/login');

  }

}
