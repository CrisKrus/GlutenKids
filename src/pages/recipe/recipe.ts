import {Component} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {CartPage} from "../cart/cart";
import {Recipe} from "../../model/recipe";
import {Ingredient} from "../../model/Ingredient";
import {CookingPage} from "../cooking/cooking";

@Component({
    selector: 'page-recipe',
    templateUrl: 'recipe.html',
})
export class RecipePage {
    private recipe: Recipe;

    constructor(public navCtr: NavController, public navParams: NavParams) {
        this.recipe = navParams.get('recipe');
    }

    navigateToCart(ingredients: Array<Ingredient>) {
        this.navCtr.push(CartPage, {ingredients: ingredients});
    }

    navigateToCooking() {
        this.navCtr.push(CookingPage, {steps: this.recipe.steps})
    }
}
