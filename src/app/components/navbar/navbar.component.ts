import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private afsAuth: AngularFireAuth) { }

  public app_name: string = 'Nombre aplicacion';
  public isLogged: boolean = false;
  public isAdmin: boolean = false; //Valor que indica si la persona que entra es el administrador

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser(){
    this.authService.isAuth().subscribe( auth => {
      if(auth){
        console.log('user logged');
        this.isLogged = true;
      }else{
        console.log('NOT user logged');
        this.isLogged = false;
      }
    })
  }

  onLogout(){
    this.afsAuth.auth.signOut();
  }

}
