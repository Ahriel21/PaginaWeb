import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  public isAdmin: any = null;
  public isEditor: any = null;
  public userUid: string = null;

  ngOnInit() {

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
