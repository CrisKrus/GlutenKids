import {Component} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {ShoppingCartPage} from "../shopping-cart/shopping-cart";
import {Recipe} from "../../model/recipe";
import {Ingredient} from "../../model/Ingredient";
import {Step} from "../../model/Step";
import {AreYouReadyPage} from "../are-you-ready/are-you-ready";

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
        this.navCtr.push(ShoppingCartPage, {ingredients: ingredients});
    }

    navigateToCooking(steps: Array<Step>) {
        this.navCtr.push(AreYouReadyPage, {steps: steps});
        // this.navCtr.push(CookingPage, {steps: steps})
    }
}
