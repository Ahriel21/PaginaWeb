import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Promise, reject } from 'q';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserInterface } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private afsAuth: AngularFireAuth, private afs: AngularFirestore) { }


  registerUser(email: string, pass: string){
    return Promise((resolve, reject) => {
      this.afsAuth.auth.createUserWithEmailAndPassword(email,pass)
      .then(userData => {
        resolve(userData),
        this.updateUserData(userData.user)
      }).catch(err => console.log(reject(err)))
    });
  }


  loginEmailUser(email: string, pass: string){
    return Promise((resolve, reject) => {
      this.afsAuth.auth.signInWithEmailAndPassword(email,pass)
      .then(userData => resolve(userData),
      err => reject(err));
    });
  }

  loginGoogleUser(){
    return this.afsAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    .then(credential => this.updateUserData(credential.user)) 
  }

  logoutUser(){
    return this.afsAuth.auth.signOut();
  }

  isAuth(){
    return this.afsAuth.authState.pipe(map(auth => auth));
  }

  private updateUserData(user){
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: UserInterface = {
      id: user.uid,
      email: user.email,
      roles:{
        editor: true,
        //admin: false
      }
    }
    return userRef.set(data, { merge: true })
  }

  isUserAdmin(userUid){
    return this.afs.doc<UserInterface>(`users/${userUid}`).valueChanges();
  }
  
}
