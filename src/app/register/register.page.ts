import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {

  registerForm: FormGroup;
  validationMessages = {
    nombre: [
      {type: 'requiered', message: 'El nombre es requerido'},
      {type: 'minlength', message: 'El nombre debe tener minimo tres letras'}
    ],

    apellido: [
      {type: 'requered', message: 'El apellido es requerido.'},
      {type: 'minlength', message: 'El apellido debe tener minimo 3 letras'}
    ],


    email: [
      {type: 'requiered', message: 'El Email es requerido'},
      {type: 'pattern', message: 'Correo no valido'}
    ],
    password: [
      {type: 'requiered', message: 'la password es requerida'},
      {type: 'minlength', message: 'la password debe tener minimo 6 caracteres'}

    ]

  };

  errorMessage = '';

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private navCtrl: NavController,
              private router: Router,
              private alertController: AlertController
               ) {


    this.registerForm = this.formBuilder.group({

      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),

      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),

      apellido: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])),

      nombre: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ]))

    });
  }

  register(event: Event) {
    event.preventDefault();
    if (this.registerForm.valid) {
      const value = this.registerForm.value;
      this.authService.createUser(value.email, value.password)
      .then(() => {
        this.correctUserAlert();
        this.router.navigate(['/login']);
      }).catch(() => {
        this.incorrectUserAlert();
      });
    }
  }


  goToLogin() {
    this.navCtrl.navigateBack('/login');
  }

  async correctUserAlert() {
    const alert = await this.alertController.create({
      header: '¡Felicitaciones!',
      // subHeader: 'Subtitle',
      message: 'Usuario fue creado Exitosamente',
      buttons: ['OK']
    });

    await alert.present();
  }

  async incorrectUserAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      // subHeader: 'Subtitle',
      message: 'Ya tienes cuenta en Operacion Quergeo',
      buttons: ['OK']
    });

    await alert.present();
  }





}

