import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {Recipe} from "../../model/recipe";
import {Ingredient} from "../../model/Ingredient";

@Injectable()
export class RecipeProvider {

    constructor(public firebase: AngularFireDatabase) {
    }

    getArrayOfCookRecipes() {
        return new Promise((resolve) => {
            this.getAllCookRecipes().then((snap) => {
                let recipes = [];

                //todo redo this iterator
                for (let recipe of snap) {

                    let ingredients = this.getIngredients(recipe.ingredients);

                    let recipeAndIngredients: Recipe = this.createRecipe(recipe, ingredients);
                    recipes.push(recipeAndIngredients);
                }
                resolve(recipes);
            });
        });
    }

    private createRecipe(recipe, ingredients) {
        return {
            id: recipe.id,
            ingredients: ingredients,
            level: recipe.level,
            name: recipe.name
        };
    }

    //todo move that to ingredients provider
    // and name it something like getIngredientsFromArray
    getIngredients(ingredients): Array<Ingredient> {
        let res = [];
        for (let ingredient of ingredients) {
            this.firebase.database
                .ref('/ingredients/' + ingredient.id)
                .once('value')
                .then((snap) => {
                    ingredient.glute_free = snap.val().gluten_free;
                    ingredient.name = snap.val().name;
                    res.push(ingredient)
                });
        }
        return res;
    }

    getAllCookRecipes() {
        return new Promise((resolve) => {
            this.firebase.database
                .ref('/recipes/cook')
                .once('value')
                .then((snap) => {
                    resolve(snap.val());
                });
        });
    }

    getArrayOfDessertRecipes() {
        return new Promise((resolve) => {
            this.getAllDessertRecipes().then((recipes) => {
                let array = [];

                //todo change this to for of loop
                Object.keys(recipes).map((index) => {
                    let recipe: Recipe = {
                        id: index,
                        ingredients: recipes[index].ingredients.toArray(),
                        level: recipes[index].level,
                        name: recipes[index].name
                    };
                    array.push(recipe);
                });
                resolve(array);
            });
        });
    }

    private getAllDessertRecipes() {
        return new Promise((resolve, reject) => {
            this.firebase.database
                .ref('/recipes/dessert')
                .once('value', (snapshot) => {
                    resolve(snapshot.val());
                })
                .catch((err) => {
                    reject(err);
                })
        });
    }
}
