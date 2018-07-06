import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RecipePage} from "../recipe/recipe";

@Component({
  selector: 'page-dessert',
  templateUrl: 'dessert.html',
})
export class DessertPage {

  constructor(public navCtrl: NavController) {
  }

  navigateToRecipe() {
    this.navCtrl.push(RecipePage);
  }
}
