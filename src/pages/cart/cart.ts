import {Component} from '@angular/core';
import {NavParams} from "ionic-angular";
import {Ingredient} from "../../model/Ingredient";

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
    private ingredients: Array<Ingredient>;

  constructor(public navParams: NavParams) {
      //todo move that to ionWillEnter
      //todo create a separation between different list
      this.ingredients = navParams.get('ingredients');
  }

  updateList(ingredient) {
    console.log('Update', ingredient);
  }
}
