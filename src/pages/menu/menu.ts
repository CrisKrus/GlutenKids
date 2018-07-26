import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RecipeListPage} from "../recipe-list/recipe-list";
import {RecipeProvider} from "../../providers/recipe/recipe";

@Component({
    selector: 'page-menu',
    templateUrl: 'menu.html',
})
export class MenuPage {

    constructor(public navCtrl: NavController, public recipeProvider: RecipeProvider) {
    }

    navigateToDessert() {
        this.navCtrl.push(RecipeListPage);
    }

    navigateToFood() {
        this.recipeProvider.getArrayOfCookRecipes()
            .then((array) => {
                this.navCtrl.push(RecipeListPage, {recipes: array});
            });
    }
}
