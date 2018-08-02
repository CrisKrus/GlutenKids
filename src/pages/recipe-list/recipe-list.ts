import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {RecipePage} from "../recipe/recipe";
import {Recipe} from "../../model/recipe";

@Component({
    selector: 'page-dessert',
    templateUrl: 'recipe-list.html',
})
export class RecipeListPage {
    private recipes: Array<Recipe>;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        //todo move this to ionicWillEnter
        this.recipes = navParams.get('recipes');
    }

    navigateToRecipe(recipe: Recipe) {
        this.navCtrl.push(RecipePage, {recipe: recipe});
    }
}
