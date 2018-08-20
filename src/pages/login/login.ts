import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SignupPage} from "../signup/signup";
import {UserProvider} from "../../providers/user/user";
import {MenuPage} from "../menu/menu";
import {ToastProvider} from "../../providers/toast/toast";
import {ValidatorProvider} from "../../providers/validator/validator";

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {
    loginForm: FormGroup;
    email: string;
    password: string;

    constructor(private navCtrl: NavController,
                private formBuilder: FormBuilder,
                private userProvider: UserProvider,
                private toastProvider: ToastProvider,
                private validatorProvider: ValidatorProvider) {

        // todo: move this to ionWillEnter function or something lie that
        userProvider.session.subscribe(session => {
            if (session) {
                this.navCtrl.setRoot(MenuPage);
            }
        });

        this.setValidators();
    }

    private setValidators() {
        this.loginForm = this.formBuilder.group({
            email: ['', this.validatorProvider.EMAIL_VALIDATOR],
            password: ['', this.validatorProvider.PASSWORD_VALIDATOR]
        });
    }

    login() {
        this.userProvider.login(this.email, this.password)
            .then(() => {
                this.completeLogin();
            })
            .catch((error) => {
                this.toastProvider.warning(error.message);
            });

    }

    private completeLogin() {
        this.email = '';
        this.password = '';
        this.navCtrl.setRoot(MenuPage);
    }

    openSignUpPage() {
        this.navCtrl.push(SignupPage);
    }
}
