import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  loginForm: FormGroup;
  validationMessages = {
    email: [
      {type:"requiered", message: "El Email es requerido"},
      {type:'pattern', message: "Correo no valido"}
    ], 
    password: [
      {type:"requiered", message: "la password es requerida"},
      {type:"minlength", message: "la password deb e tener minimo 6 caracteres"}

    ]
   
  }

  errorMessage:string = "";


  constructor(private formBuilder: FormBuilder, private authService: AuthenticateService, private navCtrl: NavController,
    private storage: Storage ) { 
    this.loginForm = this.formBuilder.group({
      email: new FormControl("", Validators.compose([
        Validators.required, 
        // patron de correo
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ])),

      password: new FormControl("", Validators.compose([
        Validators.required,
        // minimo de caracteres
        Validators.minLength(5)

        // patron de correo
        
      ]))

    });
  }

  ngOnInit() { }

  loginUser(credentials){
    this.authService.loginUser(credentials).then(res => {
      this.errorMessage="";
      this.storage.set( "isUserLoggedIn", true);
      this.navCtrl.navigateForward("/menu/home");
    }).catch(
      err => {
        this.errorMessage = err;

      }
    );
  }

  goToRegister(){
    this.navCtrl.navigateForward('/register');

  }
}