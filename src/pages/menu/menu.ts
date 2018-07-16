import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RecipeListPage} from "../recipe-list/recipe-list";

@Component({
    selector: 'page-menu',
    templateUrl: 'menu.html',
})
export class MenuPage {

    constructor(public navCtrl: NavController) {
    }

    navigateToDessert() {
        this.navCtrl.push(RecipeListPage);
    }

    navigateToFood() {
        this.navCtrl.push(RecipeListPage);
    }
}
