import {Component} from '@angular/core';
import {NavController} from "ionic-angular";

@Component({
    selector: 'forward-button',
    templateUrl: 'forward-button.html'
})
export class ForwardButtonComponent {

    constructor(private navCtrl: NavController) {
    }

    pop() {
        this.navCtrl.pop();
    }

}
