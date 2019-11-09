import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  validationMessages = {
    email: [
      {type: 'requiered', message: 'El Email es requerido'},
      {type: 'pattern', message: 'El Email no es valido'}
    ],
    password: [
      {type: 'requiered', message: 'La contraseña es requerida'},
      {type: 'minlength', message: 'La contraseña debe tener minimo 6 caracteres'}

    ]

  };

  errorMessage = '';


  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private navCtrl: NavController,
              private router: Router,
              private alertController: AlertController
               ) {


    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),

      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))

    });
  }




  ngOnInit() { }

  login(event: Event) {
    event.preventDefault();
    if (this.loginForm.valid) {
      const value = this.loginForm.value;
      this.authService.login(value.email, value.password).then(() => {
        this.router.navigate(['/menu']);
      }) .catch(() => {
          this.presentAlert();
      });

    }
  }

  goToRegister() {
    this.navCtrl.navigateForward('/register');

  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      // subHeader: 'Subtitle',
      message: 'El correo o la contraseña son incorrectas',
      buttons: ['OK']
    });

    await alert.present();
  }
}
