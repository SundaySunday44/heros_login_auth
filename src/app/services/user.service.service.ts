import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,signInWithPopup
         ,GoogleAuthProvider} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private auth: Auth) { }

  registerUser(email:any,password:any){
    return createUserWithEmailAndPassword(this.auth,email,password);
  }

  loginUser(email: any, password:any){
    return signInWithEmailAndPassword(this.auth,email,password);
  }

  logout(){
    return signOut(this.auth);
  }

  loginWithGoogle(){
    return signInWithPopup(this.auth,new GoogleAuthProvider());
  }

  userIsLogin(){
    return this.auth.currentUser;
  }

}
