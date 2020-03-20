import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  public email : string = "";
  public password : string = "";
  public isError: boolean = false;

  ngOnInit() {
  }

  onLogin(form: NgForm): void {
    if(form.valid){
      this.authService.loginEmailUser(this.email, this.password)
      .then( (res) => {
        this.onLoginRedirect();
        this.isError = false;
      }).catch( err => this.onIsError());
    }else{
      this.onIsError();
    }
    
  }

  onLoginGoogle(): void {
    this.authService.loginGoogleUser()
    .then( (res) => {
      this.onLoginRedirect();
    }).catch( err => console.log('err', err.message))  
  }

  onLogout(){
    this.authService.logoutUser();
  }

  onLoginRedirect(): void {
    this.router.navigate(['']);
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 3000);
  }

}
