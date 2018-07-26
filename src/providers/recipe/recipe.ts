import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {Recipe} from "../../model/recipe";

@Injectable()
export class RecipeProvider {

    constructor(public firebase: AngularFireDatabase) {
    }

    getArrayOfCookRecipes() {
        return new Promise((resolve) => {
            this.getAllCookRecipes().then((recipes) => {
                let array = [];
                Object.keys(recipes).map((index) => {
                    let recipe: Recipe = {
                        id: index,
                        ingredients: recipes[index].ingredients,
                        level: recipes[index].level,
                        name: recipes[index].name
                    };
                    array.push(recipe);
                });
                resolve(array);
            });
        });
    }

    getAllCookRecipes() {
        return new Promise((resolve, reject) => {
            this.firebase.database
                .ref('/recipes/cook')
                .once('value', (snapshot) => {
                    resolve(snapshot.val());
                })
                .catch((err) => {
                    reject(err);
                })
        });

    }

}
