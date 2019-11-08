import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AuthService } from '../services/auth.service';




@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor( private menu: MenuController, private navCtrl: NavController, private storage: Storage,
               private auth: AuthService

               ) { }

  ngOnInit() {
  }

  closeMenu() {
    this.menu.close();
  }

  logout() {
    this.auth.logout();
    this.navCtrl.navigateRoot('/login');


  }

  goToSettings() {
    this.navCtrl.navigateRoot('/menu/settings');
    this.menu.close();
  }

  goToHome() {
    this.navCtrl.navigateRoot('/menu/home');
    this.menu.close();
  }

  goToSport() {
    this.navCtrl.navigateRoot('');
    this.menu.close();
  }

}
