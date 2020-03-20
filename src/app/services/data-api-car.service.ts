import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ValuesInterface } from '../models/dashboard';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiCarService {

  private carsCollection: AngularFirestoreCollection<ValuesInterface>;
  private cars: Observable<ValuesInterface[]>;

  constructor(private afs: AngularFirestore) {
    this.getAllCars()
  }

  //Devuelve cada una de las variables que tiene la coleccion de los coches
  getAllCars(){
    this.carsCollection = this.afs.collection<ValuesInterface>('Coches');
    return this.cars = this.carsCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map( action =>{
        const data = action.payload.doc.data() as ValuesInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

}
