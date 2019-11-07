import { Component } from '@angular/core';
import { PlatziMusicService } from '../services/platzi-music.service';
import { ModalController } from '@ionic/angular';
import { SongsModalPage } from '../songs-modal/songs-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOps = {

    initialSlide: 2, // El slide inicial es 2
    slidesPerView: 4, // El slide por vista
    centerSlides: true, // centar los slide
    speed: 400 // velocidad de transmicion
  };
  albums: any[] = [];
  songs: any[] = [];
  artists: any[] = [];
  song: {
    preview_url: string,
    playing: boolean,
    name: string
  } = {
    preview_url: '',
    playing: false,
    name: ''
  };

  currentSong: HTMLAudioElement;
  newTime;

  constructor(private musicService: PlatziMusicService, private modalController: ModalController) {}

  // Este metodo se ejecuta exitosamente si se ha ejecutado el html existosamente
  ionViewDidEnter() {
    this.musicService.getNewReleases().then(newReleases => {
      this.artists = this.musicService.getArtists();
      // console.log(this.artists);
      this.songs = newReleases.albums.items.filter(e => e.album_type=="single");
      this.albums = newReleases.albums.items.filter(e => e.album_type=="album");
    });
  }

  async showSongs(artist){
    const songs = await this.musicService. getArtistTopTracks(artist.id);
    const modal = await this.modalController.create({
      component: SongsModalPage,
      componentProps: {
        songs: songs.tracks,
        artist: artist.name
      }
    });

    modal.onDidDismiss().then(dataRetuned => {
      this.song = dataRetuned.data;
    });

    return await modal.present();
  }

  play() {
    this.currentSong = new Audio(this.song.preview_url);
    this.currentSong.play();

    // Funcion del tiempo
    this.currentSong.addEventListener("timeupdate", () => {
      this.newTime =
        (this.currentSong.currentTime * (this.currentSong.duration /  10
          )) / 100;
    })

    this.song.playing = true;
  }

  pause() {
    this.currentSong.pause();
    this.song.playing = false;
  }

  parseTime(time: number) {
    if (time) {
      const partTime = parseInt(time.toString().split(".")[0], 10);
      let minutes = Math.floor(partTime / 60).toString();

      if (minutes.length == 1){
        minutes + "0"  + minutes;
      }

      let seconds = (partTime%60).toString();
      if (seconds.length == 1){
        minutes + "0"  + seconds;
      }

      return minutes + ":" + seconds;

    }

  }
}
