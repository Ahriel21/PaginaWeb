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
    
    //this.houses = this.housesCollection.valueChanges();
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

  /*getAllHousesYear(){
    this.housesCollection = this.afs.collection<ValuesInterface>('Casas');
    return this.houses = this.housesCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map( action =>{
        const data = action.payload.doc.data().ano as ValuesInterface;
        return data;
      });
    }));
  }

  getAllHousesMonth(){
    this.housesCollection = this.afs.collection<ValuesInterface>('Casas');
    return this.houses = this.housesCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map( action =>{
        const data = action.payload.doc.data().mes as ValuesInterface;
        return data;
      });
    }));
  }

  getAllHousesDay(){
    this.housesCollection = this.afs.collection<ValuesInterface>('Casas');
    return this.houses = this.housesCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map( action =>{
        const data = action.payload.doc.data().dia as ValuesInterface;
        return data;
      });
    }));
  }

  getAllHousesHour(){
    this.housesCollection = this.afs.collection<ValuesInterface>('Casas');
    return this.houses = this.housesCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map( action =>{
        const data = action.payload.doc.data().hora as ValuesInterface;
        return data;
      });
    }));
  }

  getAllHousesMinute(){
    this.housesCollection = this.afs.collection<ValuesInterface>('Casas');
    return this.houses = this.housesCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map( action =>{
        const data = action.payload.doc.data().minuto as ValuesInterface;
        return data;
      });
    }));
  }

  getAllHousesSecond(){
    this.housesCollection = this.afs.collection<ValuesInterface>('Casas');
    return this.houses = this.housesCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map( action =>{
        const data = action.payload.doc.data().segundo as ValuesInterface;
        return data;
      });
    }));
  }

  getAllHousesFi(){
    this.housesCollection = this.afs.collection<ValuesInterface>('Casas');
    return this.houses = this.housesCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map( action =>{
        const data = action.payload.doc.data().fi as ValuesInterface;
        return data;
      });
    }));
  }

  getAllHousesI(){
    this.housesCollection = this.afs.collection<ValuesInterface>('Casas');
    return this.houses = this.housesCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map( action =>{
        const data = action.payload.doc.data().i as ValuesInterface;
        return data;
      });
    }));
  }

  getAllHousesP(){
    this.housesCollection = this.afs.collection<ValuesInterface>('Casas');
    return this.houses = this.housesCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map( action =>{
        const data = action.payload.doc.data().p as ValuesInterface;
        return data;
      });
    }));
  }

  getAllHousesS(){
    this.housesCollection = this.afs.collection<ValuesInterface>('Casas');
    return this.houses = this.housesCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map( action =>{
        const data = action.payload.doc.data().s as ValuesInterface;
        return data;
      });
    }));
  }

  getAllHousesV(){
    this.housesCollection = this.afs.collection<ValuesInterface>('Casas');
    return this.houses = this.housesCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map( action =>{
        const data = action.payload.doc.data().v as ValuesInterface;
        return data;
      });
    }));
  }*/

}
