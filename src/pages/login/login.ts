import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SignupPage} from "../signup/signup";
import {UserProvider} from "../../providers/user/user";
import {MenuPage} from "../menu/menu";
import {ToastProvider} from "../../providers/toast/toast";

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {
    loginForm: FormGroup;
    email: string;
    password: string;

    constructor(public navCtrl: NavController,
                private formBuilder: FormBuilder,
                private userProvider: UserProvider,
                private toastProvider: ToastProvider) {
        if (userProvider.session) {
            this.navCtrl.setRoot(MenuPage);
        }
        
        this.setValidators();
    }

    private setValidators() {
        const emailValidator = Validators.compose([
            Validators.required,
            Validators.email
        ]);
        const passwordValidator = Validators.compose([
            Validators.required,
            Validators.minLength(8)
        ]);

        this.loginForm = this.formBuilder.group({
            email: ['', emailValidator],
            password: ['', passwordValidator]
        });
    }

    login() {
        this.userProvider.login(this.email, this.password)
            .then(() => {
                this.loginComplete();
            })
            .catch((error) => {
                this.toastProvider.warning(error.message);
            });

    }

    private loginComplete() {
        this.email = '';
        this.password = '';
        this.navCtrl.setRoot(MenuPage);
    }

    openSignUpPage() {
        this.navCtrl.push(SignupPage);
    }
}
