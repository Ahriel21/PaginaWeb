import { Component, OnInit } from '@angular/core';
import { DataApiHouseService } from './../../services/data-api-house.service';
import { DataApiCarService } from './../../services/data-api-car.service';
import { AuthService } from './../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInterface } from './../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private dataApiHouse: DataApiHouseService,
    private dataApiCar: DataApiCarService, 
    private authService: AuthService
  ) { }

  public houses = [];
  public house = '';

  public cars = [];
  public car = '';

  public isAdmin: any = null;
  public isEditor: any = null;
  public userUid: string = null;

  ngOnInit() {
    this.dataApiHouse.getAllHouses().subscribe(houses =>{
      console.log('HOUSES', houses);
      this.houses = houses;
    })

    this.dataApiCar.getAllCars().subscribe(cars =>{
      console.log('CARS', cars);
      this.cars = cars;
    })

    this.getCurrentUser();
  }

  getCurrentUser(){
    this.authService.isAuth().subscribe(auth =>{
      if(auth){
        this.userUid = auth.uid;
        this.authService.isUserAdmin(this.userUid).subscribe(userRole =>{
          this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
        })
      }
    })
  }

}
