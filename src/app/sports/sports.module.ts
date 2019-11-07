import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SportsPage } from './sports.page';
// Esta se importa para colocar la parte de Google Maps
import { AgmCoreModule } from '@agm/core';
const routes: Routes = [
  {
    path: '',
    component: SportsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    // Se coloca tambien aqui para lo de google maps
    AgmCoreModule 
  ],
  declarations: [SportsPage]
})
export class SportsPageModule {}
