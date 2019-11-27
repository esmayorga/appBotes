import { Component, OnInit } from '@angular/core';
import { OperacionesService } from '../services/operaciones.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  constructor(public operaciones: OperacionesService)  { }

  ngOnInit() {
    this.operaciones.getUsesr().subscribe(user => {
      console.log(user);
    });
  }
}

