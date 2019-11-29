import { Observable } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';
import { DataApiHouseService } from './data-api-house.service';
import { DataApiCarService } from './data-api-car.service';
import { ValuesInterface } from '../models/dashboard';

@Injectable({
  providedIn: 'root'
})
export class DataApiGraphicService implements OnInit {

  public houses = [];
  public house = '';

   public cars = [];
   public car = '';

   seconds: Observable<ValuesInterface>;
   secondsDefinitive: ValuesInterface;


  constructor(private dataApiHouse: DataApiHouseService,
    private dataApiCar: DataApiCarService) { }

  ngOnInit() {
    
    this.getAllCarsSecond();
    this.getAllHouseSecond();

  }

  getAllCarsSecond(){
    this.dataApiCar.getAllCarsSecond().subscribe(cars =>{
      console.log('CARS', cars);
      this.cars = cars;
    })
  }

  getAllHouseSecond(){
    this.dataApiHouse.getAllHouses().subscribe(houses =>{
      console.log('HOUSES', houses);
      this.houses = houses;
    })
  }

    
}
