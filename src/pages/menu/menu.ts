import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RecipeListPage} from "../recipe-list/recipe-list";
import {RecipeProvider} from "../../providers/recipe/recipe";

@Component({
    selector: 'page-menu',
    templateUrl: 'menu.html',
})
export class MenuPage {
    imageSource: string;

    constructor(public navCtrl: NavController, public recipeProvider: RecipeProvider) {
        this.imageSource = 'assets/icon/celia.png'
    }

    ionViewWillEnter(){
        this.imageSource = 'assets/icon/celia.png'
    }

    navigateToDessert() {
        this.imageSource = 'assets/gif/right-option.gif';
        this.recipeProvider
            .getArrayOfDessertRecipes()
            .then((array) => {
                this.navCtrl.push(RecipeListPage, {recipes: array, cook: false});
            });
    }

    navigateToFood() {
        this.imageSource = 'assets/gif/left-option.gif';
        this.recipeProvider
            .getArrayOfCookRecipes()
            .then((array) => {
                this.navCtrl.push(RecipeListPage, {recipes: array, cook: true});
            });
    }
}
