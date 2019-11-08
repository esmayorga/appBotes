import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


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
      {type: 'pattern', message: 'Correo no valido'}
    ],
    password: [
      {type: 'requiered', message: 'la password es requerida'},
      {type: 'minlength', message: 'la password deb e tener minimo 6 caracteres'}

    ]

  };

  errorMessage = '';


  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private navCtrl: NavController,
              private router: Router,
               ) {

    this.buildForm();
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
          alert('no es valido');
      });

    }
  }

  private buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }


  goToRegister() {
    this.navCtrl.navigateForward('/register');

  }
}
