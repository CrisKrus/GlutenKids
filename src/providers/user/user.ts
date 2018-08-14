import {Injectable} from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";

@Injectable()
export class UserProvider {

    constructor(public angularFireAuth: AngularFireAuth) {
    }

    createUser(email: string, password: string){
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
    }

    login(email: string, password: string) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
    }

    get session(){
        return this.angularFireAuth.authState;
    }
}
