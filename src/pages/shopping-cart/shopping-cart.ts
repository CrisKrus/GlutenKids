import {Component} from '@angular/core';
import {NavParams, ToastController} from "ionic-angular";
import {Ingredient} from "../../model/Ingredient";

@Component({
    selector: 'page-shopping-cart',
    templateUrl: 'shopping-cart.html',
})
export class ShoppingCartPage {
    private sets = [];

    constructor(public navParams: NavParams, private toastCtrl: ToastController) {
        // todo group ingredients by set before this point
        this.groupIngredientsBySet(navParams.get('ingredients'));
    }

    private groupIngredientsBySet(ingredients: Array<Ingredient>) {
        for (let ingredient of ingredients) {
            let setIndex = ingredient.set;
            this.sets[setIndex] = ingredients.filter(array => array.set == setIndex);
        }
    }

    updateList(glutenFree, checked) {
        if (this.isNot(glutenFree) && checked) {
            this.presentToast("Has mirado bien que sea gluen free?");
        }
    }

    isNot(glutenFree) {
        return !glutenFree;
    }

    //todo: move to toast controller
    presentToast(message: string) {
        this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        }).present();
    }
}
