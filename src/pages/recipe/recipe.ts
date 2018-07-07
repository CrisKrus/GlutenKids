import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import {CartPage} from "../cart/cart";

@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
})
export class RecipePage {

  constructor(public navCtr: NavController) {
  }

  navigateToCart() {
    this.navCtr.push(CartPage);
  }

  navigateToCooking() {
    console.log('Cooking');
  }
}
