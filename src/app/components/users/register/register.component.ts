import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private storage: AngularFireStorage) { }

  @ViewChild('imageUser', {static:true}) inputImageUser: ElementRef;

  public email: string = "";
  public password: string = "";
  public isError: boolean = false;
  public msgError: string = "";

  uploadPercent: Observable<number>;
  urlImage: Observable<string>;

  ngOnInit() {
  }

  onUpload(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/profile_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage = ref.getDownloadURL ())).subscribe();
  }

  onAddUser(form: NgForm){
    if(form.valid){
      this.authService.registerUser(this.email, this.password)
      .then((res) => {
        this.authService.isAuth().subscribe( user => {
          if(user){
            console.log('userActual', user)
            user.updateProfile({
              displayName: '',
              photoURL: this.inputImageUser.nativeElement.value
            }).then( () => {
              this.router.navigate(['']);
            }).catch( (error) => {
                this.onIsError();
                this.msgError = error.error.error.details.messages.email;
                
            });
          }
        });
        this.isError = true;
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

  onLoginRedirect(): void{
    this.router.navigate(['']);
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 3000);
  }

}
