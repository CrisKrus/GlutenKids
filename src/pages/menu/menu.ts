import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RecipeListPage} from "../recipe-list/recipe-list";
import {RecipeProvider} from "../../providers/recipe/recipe";
import {UserProvider} from "../../providers/user/user";

@Component({
    selector: 'page-menu',
    templateUrl: 'menu.html',
})
export class MenuPage {
    imageSource: string;

    constructor(public navCtrl: NavController, public recipeProvider: RecipeProvider, private userProvider: UserProvider) {
        this.imageSource = 'assets/icon/celia.png'
    }

    ionViewWillEnter() {
        this.imageSource = 'assets/icon/celia.png';
    }

    navigateToDessert() {
        this.imageSource = 'assets/gif/right-option.gif';
        setTimeout(() => {
            this.recipeProvider
                .getArrayOfDessertRecipes()
                .then((array) => {
                    this.navCtrl.push(RecipeListPage, {
                        recipes: array,
                        cook: false
                    });
                })
                .catch();
        }, 1000);
    }

    navigateToFood() {
        this.imageSource = 'assets/gif/left-option.gif';
        setTimeout(() => {
            this.recipeProvider
                .getArrayOfCookRecipes()
                .then((array) => {
                    this.navCtrl.push(RecipeListPage, {
                        recipes: array,
                        cook: true
                    });
                })
                .catch();
        }, 1000);
    }
}
