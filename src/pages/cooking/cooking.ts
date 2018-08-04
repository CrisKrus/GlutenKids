import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';
import {Step} from "../../model/Step";

@Component({
    selector: 'page-cooking',
    templateUrl: 'cooking.html',
})
export class CookingPage {
    private steps: Array<Step>;

    constructor(public navParams: NavParams) {
        this.steps = navParams.get('steps')
    }


}
