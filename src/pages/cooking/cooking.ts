import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';
import {Step} from "../../model/Step";

@Component({
    selector: 'page-cooking',
    templateUrl: 'cooking.html',
})
export class CookingPage {
    private sets = [];

    constructor(public navParams: NavParams) {
        //todo group by set before this point, maybe on database
        this.groupStepsBySet(navParams.get('steps'));
    }

    private groupStepsBySet(steps: Array<Step>) {
        for (let step of steps) {
            let stepIndex = step.set;
            this.sets[stepIndex] = steps.filter(array => array.set == stepIndex);
        }
    }
}
