import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.page.html',
  styleUrls: ['./flights.page.scss'],
})
export class FlightsPage implements OnInit {

  constructor() { }
  dateDepartur = false;

  ngOnInit() {
  }

  dateDeparture() {
    this.dateDepartur = true;
  }

  returnDate() {
    this.dateDepartur = false;
  }

}
