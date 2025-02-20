import { Injectable } from "@angular/core";
import { Auth , createUserWithEmailAndPassword,signInWithEmailAndPassword , signOut} from "@angular/fire/auth";

@Injectable({
    providedIn: 'root'
})

export class UserService{
    constructor( private auth: Auth){}

    register({ email, password2}: any){
        return createUserWithEmailAndPassword(this.auth, email, password2)
    }

    login({ email, password}: any){
        return signInWithEmailAndPassword(this.auth, email, password)
    }

    logout() {
        return signOut(this.auth);
      }

}