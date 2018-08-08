import {Component} from '@angular/core';
import {NavParams, ToastController} from "ionic-angular";
import {Ingredient} from "../../model/Ingredient";

@Component({
    selector: 'page-cart',
    templateUrl: 'cart.html',
})
export class CartPage {
    private ingredients: Array<Ingredient>;

    constructor(public navParams: NavParams, private toastCtrl: ToastController) {
        //todo move that to ionWillEnter
        //todo create a separation between different list
        this.ingredients = navParams.get('ingredients');
    }

    updateList(glutenFree, checked) {
        if (this.isNot(glutenFree) && checked){
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
