import {Injectable} from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {FirebaseApp} from "angularfire2";

@Injectable()
export class UserProvider {

    constructor(public angularFireAuth: AngularFireAuth, private firebase: FirebaseApp) {
    }

    createUser(email: string, password: string){
        return new Promise((resolve, reject) => {
            this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
                .then((data) => {
                    return this.setUserData(data.user);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    private setUserData(user) {
        return this.firebase.database().ref('users/' + user.uid)
            .set({level: 1})
    }

    login(email: string, password: string) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
    }

    get session(){
        return this.angularFireAuth.authState;
    }

    get level(){
        return new Promise((resolve, reject) => {
            this.userLevelReference()
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

    private userLevelReference(){
        return this.firebase.database().ref('/users/' + this.uid + '/level');
    }

    levelUp() {
        this.level.then((level: number) => {
            let newLevel = {};
            newLevel['level'] = level + 1;
            return this.firebase.database()
                .ref('/users/' + this.uid)
                .update(newLevel);
        })
    }
}
