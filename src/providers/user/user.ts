import {Injectable} from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {FirebaseApp} from "angularfire2";

@Injectable()
export class UserProvider {

    constructor(public angularFireAuth: AngularFireAuth, private firebase: FirebaseApp) {
    }

    createUser(email: string, password: string){
        //todo: create user reference on database with level 0
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
    }

    login(email: string, password: string) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
    }

    get session(){
        return this.angularFireAuth.authState;
    }

    get level(){
        return new Promise((resolve, reject) => {
            this.firebase.database()
                .ref('/users/' + this.uid + '/level')
                .on('value', (snapshot) => {
                    resolve(snapshot.val());
                }, (error) => {
                    reject(error);
                });
        });
    }

    private get uid(){
        return this.angularFireAuth.auth.currentUser.uid;
    }
}
