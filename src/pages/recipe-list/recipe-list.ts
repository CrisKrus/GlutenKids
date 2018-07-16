import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RecipePage} from "../recipe/recipe";

@Component({
    selector: 'page-dessert',
    templateUrl: 'recipe-list.html',
})
export class RecipeListPage {

    constructor(public navCtrl: NavController) {
    }

    navigateToRecipe() {
        this.navCtrl.push(RecipePage);
    }
}
