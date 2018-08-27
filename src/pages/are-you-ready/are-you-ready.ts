import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {StepPage} from "../step/step";

@Component({
    selector: 'page-are-you-ready',
    templateUrl: 'are-you-ready.html',
})
export class AreYouReadyPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
    }

    noOption() {
        this.navCtrl.pop();
    }

    yesOption() {
        this.navCtrl.push(StepPage)
    }
}
