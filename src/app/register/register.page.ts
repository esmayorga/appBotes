import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {

  registerForm: FormGroup;
  validationMessages = {
    nombre:[
      {type:"requiered", message: "El nombre es requerido"},
      {type:"minlength", message: "El nombre debe tener minimo tres letras"}
    ],

    apellido: [
      {type: "requered", message: "El apellido es requerido."},
      {type:"minlength", message: "El apellido debe tener minimo 3 letras"}
    ],


    email: [
      {type:"requiered", message: "El Email es requerido"},
      {type:'pattern', message: "Correo no valido"}
    ], 
    password: [
      {type:"requiered", message: "la password es requerida"},
      {type:"minlength", message: "la password debe tener minimo 6 caracteres"}

    ]
   
  }

  errorMessage:string = "";

  constructor(private formBuilder: FormBuilder, private authService: AuthenticateService, private navCtrl: NavController,
    private storage: Storage ) { 
    this.registerForm = this.formBuilder.group({

      email: new FormControl("", Validators.compose([
        Validators.required, 
        // patron de correo
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ])),

      password: new FormControl("", Validators.compose([
        Validators.required,
        // minimo de caracteres
        Validators.minLength(5)        
      ])),

      apellido: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])),

      nombre: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ]))

    });
  }


  register(userData){
    
    this.authService.registerUser(userData).then(() => {
      this.navCtrl.navigateBack('/login');
    });
  }

  goToLogin(){
    this.navCtrl.navigateBack('/login');
  }

  

 



}
