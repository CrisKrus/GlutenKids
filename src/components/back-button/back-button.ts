import {Component} from '@angular/core';
import {NavController} from "ionic-angular";

@Component({
    selector: 'back-button',
    templateUrl: 'back-button.html'
})
export class BackButtonComponent {
    constructor(public navCtrl: NavController) {
    }

    pop() {
        this.navCtrl.pop();
    }

}
