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
    private cook: boolean;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.recipes = navParams.get('recipes');
        this.cook = navParams.get('cook');
    }

    navigateToRecipe(recipe: Recipe) {
        this.navCtrl.push(RecipePage, {recipe: recipe});
    }
}
