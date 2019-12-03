import { DataApiHouseService } from './../../services/data-api-house.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public houses = [];

  constructor(private authService: AuthService, private dataApiHouse: DataApiHouseService) { }

  public isAdmin: any = null;
  public isEditor: any = null;
  public userUid: string = null;

  ngOnInit() {

    this.getCurrentUser();
    this.getHouses();
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

  getHouses(): any{
    this.dataApiHouse.getAllHouses().subscribe(houses =>{
      console.log('HOUSES', houses);
      this.houses = houses;
    })
  }
  

}
