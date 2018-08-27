import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

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
        console.log('NO');
    }

    yesOption() {
        console.log('YES');
    }
}
