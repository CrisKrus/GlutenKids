import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {StepPage} from "../step/step";

@Component({
    selector: 'page-are-you-ready',
    templateUrl: 'are-you-ready.html',
})
export class AreYouReadyPage {
    private src = 'assets/gif/waiting.gif';

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidEnter() {
        this.src = 'assets/gif/waiting.gif';
    }

    noOption() {
        this.navCtrl.pop();
    }

    yesOption() {
        this.src = 'assets/gif/zucchini-omelet.gif';
        this.navCtrl.push(StepPage, {steps: this.navParams.get('steps')})
    }
}
