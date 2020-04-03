import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ValuesInterface } from '../models/dashboard';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiHouseService {

  private housesCollection: AngularFirestoreCollection<ValuesInterface>;
  private houses: Observable<ValuesInterface[]>;

  constructor(private afs: AngularFirestore) {
    
    this.getAllHouses();
  }

  //Devuelve cada una de las variables que tiene la coleccion de las casas
  getAllHouses(){
    this.housesCollection = this.afs.collection<ValuesInterface>('Casas');
    return this.houses = this.housesCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map( action =>{
        const data = action.payload.doc.data() as ValuesInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

}
