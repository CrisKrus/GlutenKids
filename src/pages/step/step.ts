import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Step} from "../../model/Step";
import {UserProvider} from "../../providers/user/user";

@Component({
    selector: 'page-step',
    templateUrl: 'step.html',
})
export class StepPage {
    private steps = [];
    private index = 0;

    constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider) {
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
        // scroll to top
        this.index++;
        if(this.index == this.steps.length){
            this.index--; // if the index is not decreased the app will broke on popToRoot(), why? Do not know
            // TODO check if this recipe is completed jet, if is don't level up
            this.userProvider.levelUp();
            this.navCtrl.popToRoot();
        }
    }
}
