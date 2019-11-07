import { Component } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-songs-modal',
  templateUrl: './songs-modal.page.html',
  styleUrls: ['./songs-modal.page.scss'],
})
export class SongsModalPage{

  songs: any[];
  artists: string;

  constructor(private navParams: NavParams, private modalController: ModalController ) { }

  ionViemDidEnter(){
    this.songs = this.navParams.data.songs;
    this.artists = this.navParams.data.artists;

  }

  async selectSong(song){
    await this.modalController.dismiss(song);
  }



  
}
