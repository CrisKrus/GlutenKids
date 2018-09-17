import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {RecipePage} from "../recipe/recipe";
import {Recipe} from "../../model/recipe";
import {UserProvider} from "../../providers/user/user";
import {ToastProvider} from "../../providers/toast/toast";

@Component({
    selector: 'page-dessert',
    templateUrl: 'recipe-list.html',
})
export class RecipeListPage {
    private recipes: Array<Recipe>;
    private cook: boolean;
    private userLevel = '';

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private userProvider: UserProvider,
                private toast: ToastProvider) {
        userProvider.level.then((level) => {
            this.setUserLevel(level);
        });
        this.recipes = navParams.get('recipes');
        this.cook = navParams.get('cook');
    }

    private setUserLevel(level) {
        this.userLevel = level;
    }

    navigateToRecipe(recipe: Recipe) {
        // if (recipe.level > parseInt(this.userLevel)) {
        //     this.toast.warning('No tienes el nivel necesario: ' + recipe.level)
        // } else {
        this.navCtrl.push(RecipePage, {recipe: recipe});
        // }
    }
}
