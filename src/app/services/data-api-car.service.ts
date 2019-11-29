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

  getAllCarsYear(){
    this.carsCollection = this.afs.collection<ValuesInterface>('Coches');
    return this.cars = this.carsCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map( action =>{
        const data = action.payload.doc.data().ano as ValuesInterface;
        return data;
      });
    }));
  }

  getAllCarsMonth(){
    this.carsCollection = this.afs.collection<ValuesInterface>('Coches');
    return this.cars = this.carsCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map( action =>{
        const data = action.payload.doc.data().mes as ValuesInterface;
        return data;
      });
    }));
  }

  getAllCarsDay(){
    this.carsCollection = this.afs.collection<ValuesInterface>('Coches');
    return this.cars = this.carsCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map( action =>{
        const data = action.payload.doc.data().dia as ValuesInterface;
        return data;
      });
    }));
  }

  getAllCarsHour(){
    this.carsCollection = this.afs.collection<ValuesInterface>('Coches');
    return this.cars = this.carsCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map( action =>{
        const data = action.payload.doc.data().hora as ValuesInterface;
        return data;
      });
    }));
  }

  getAllCarsMinute(){
    this.carsCollection = this.afs.collection<ValuesInterface>('Coches');
    return this.cars = this.carsCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map( action =>{
        const data = action.payload.doc.data().minuto as ValuesInterface;
        return data;
      });
    }));
  }

  getAllCarsSecond(){
    this.carsCollection = this.afs.collection<ValuesInterface>('Coches');
    return this.cars = this.carsCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map( action =>{
        const data = action.payload.doc.data().segundo as ValuesInterface;
        return data;
      });
    }));
  }

  getAllCarsFi(){
    this.carsCollection = this.afs.collection<ValuesInterface>('Coches');
    return this.cars = this.carsCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map( action =>{
        const data = action.payload.doc.data().fi as ValuesInterface;
        return data;
      });
    }));
  }

  getAllCarsI(){
    this.carsCollection = this.afs.collection<ValuesInterface>('Coches');
    return this.cars = this.carsCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map( action =>{
        const data = action.payload.doc.data().i as ValuesInterface;
        return data;
      });
    }));
  }

  getAllCarsP(){
    this.carsCollection = this.afs.collection<ValuesInterface>('Coches');
    return this.cars = this.carsCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map( action =>{
        const data = action.payload.doc.data().p as ValuesInterface;
        return data;
      });
    }));
  }

  getAllCarsS(){
    this.carsCollection = this.afs.collection<ValuesInterface>('Coches');
    return this.cars = this.carsCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map( action =>{
        const data = action.payload.doc.data().s as ValuesInterface;
        return data;
      });
    }));
  }

  getAllCarsV(){
    this.carsCollection = this.afs.collection<ValuesInterface>('Coches');
    return this.cars = this.carsCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map( action =>{
        const data = action.payload.doc.data().v as ValuesInterface;
        return data;
      });
    }));
  }

}
