import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DessertPage} from "../dessert/dessert";

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController) {
  }

  navigateToDessert() {
    this.navCtrl.push(DessertPage);
  }

  navigateToFood() {
    console.log('Food');
  }
}
