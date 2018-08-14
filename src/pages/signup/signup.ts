import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MenuPage} from "../menu/menu";
import {ToastProvider} from "../../providers/toast/toast";

@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html',
})
export class SignupPage {
    singUpForm: FormGroup;
    email: string;
    password: string;
    retype: string;

    constructor(public navCtrl: NavController,
                public userProvider: UserProvider,
                public formBuilder: FormBuilder,
                public toastProvider: ToastProvider) {
        this.setInputValidators();
    }

    private setInputValidators() {
        const emailValidator = Validators.compose([
            Validators.required,
            Validators.email
        ]);
        const passwordValidator = Validators.compose([
            Validators.required,
            Validators.minLength(8),
        ]);

        this.singUpForm = this.formBuilder.group({
            email: ['', emailValidator],
            password: ['', passwordValidator],
            retype: ['', passwordValidator]
        });
    }

    signUp() {
        if (this.password == this.retype) {
            this.createUser();
        } else {
            this.toastProvider.warning('Las contraseñas no coinciden');
        }
    }

    private createUser() {
        this.userProvider.createUser(this.email, this.password)
            .then(() => {
                //todo make login
                this.navCtrl.setRoot(MenuPage)
            })
            .catch(error => this.toastProvider.warning(error.message));
    }
}
