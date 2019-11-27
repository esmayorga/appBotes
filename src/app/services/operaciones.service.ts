import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OperacionesService {

  constructor(private db: AngularFirestore) { }

  getUsesr() {
    return this.db.collection('users').snapshotChanges().pipe(map(use => {
      console.log('vas bien');
    }

    )

    );

  }
}
