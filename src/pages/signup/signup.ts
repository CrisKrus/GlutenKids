import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MenuPage} from "../menu/menu";
import {ToastProvider} from "../../providers/toast/toast";
import {ValidatorProvider} from "../../providers/validator/validator";

@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html',
})
export class SignupPage {
    singUpForm: FormGroup;
    email: string;
    password: string;
    retype: string;

    constructor(private navCtrl: NavController,
                private userProvider: UserProvider,
                private formBuilder: FormBuilder,
                private toastProvider: ToastProvider,
                private validatorProvider: ValidatorProvider) {
        this.setInputValidators();
    }

    private setInputValidators() {
        this.singUpForm = this.formBuilder.group({
            email: ['', this.validatorProvider.EMAIL_VALIDATOR],
            password: ['', this.validatorProvider.PASSWORD_VALIDATOR],
            retype: ['', this.validatorProvider.PASSWORD_VALIDATOR]
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
        this.userProvider
            .createUser(this.email, this.password)
            .then(() => {
                //todo make login before create the account
                this.navCtrl.setRoot(MenuPage)
            })
            .catch(error => this.toastProvider.warning(error.message));
    }
}
