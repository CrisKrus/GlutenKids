import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Step} from "../../model/Step";

@Component({
    selector: 'page-step',
    templateUrl: 'step.html',
})
export class StepPage {
    private steps = [];
    private index;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.index = 0;
        this.groupStepsBySet(this.navParams.get('steps'));
    }

    ionViewDidLoad() {
        //todo group by set before this point, maybe on database
    }

    private groupStepsBySet(steps: Array<Step>) {
        for (let step of steps) {
            let stepIndex = step.set;
            this.steps[stepIndex] = steps.filter(array => array.set == stepIndex);
        }
    }

    nextStep() {
        this.index++;
    //    scroll to top
    }
}
