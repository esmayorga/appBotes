import { Injectable, ɵCompiler_compileModuleAndAllComponentsSync__POST_R3__ } from '@angular/core';
import { reject } from 'q';
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { }
  async loginUser(credential){
    // backen para una url
    //return fetch("url-personal");
    const user = await this.storage.get("user");
    
    return new Promise((accept, reject) => {
      if (
        user.email == credential.email &&
        user.password == btoa(credential.password)
      ) {
        accept("Login correcto");
      } else {
        reject("login incorrecto");
      }
    });
  }

  registerUser(userData){
   userData.password = btoa(userData.password);
   return this.storage.set("user", userData);
  }
}
