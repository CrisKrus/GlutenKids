import {Component} from '@angular/core';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  ingredient_1: boolean;
  ingredient_2: boolean;
  ingredient_3: boolean;
  ingredient_4: boolean;
  ingredient_5: boolean;
  ingredient_6: boolean;
  ingredient_7: boolean;
  ingredient_8: boolean;

  constructor() {
  }

  updateList() {
    console.log('Update', this.ingredient_1);
  }
}
