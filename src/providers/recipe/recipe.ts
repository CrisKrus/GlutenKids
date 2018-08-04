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

                for (let i in snap) {
                    let ingredients = this.getIngredients(snap[i].ingredients);
                    let recipeAndIngredients: Recipe = RecipeProvider.createRecipe(snap[i], ingredients);
                    recipes.push(recipeAndIngredients);
                }
                resolve(recipes);
            });
        });
    }

    private static createRecipe(recipe, ingredients): Recipe {
        return {
            id: recipe.id,
            ingredients: ingredients,
            level: recipe.level,
            name: recipe.name,
            steps: recipe.steps
        };
    }

    //todo move that to ingredients provider
    // and name it something like getIngredientsFromArray
    private getIngredients(ingredients): Array<Ingredient> {
        let res = [];
        for (let ingredient of ingredients) {
            this.firebase.database
                .ref('/ingredients/' + ingredient.id)
                .once('value')
                .then((snap) => {
                    ingredient.gluten_free = snap.val().gluten_free;
                    ingredient.name = snap.val().name;
                    res.push(ingredient)
                });
        }
        //todo: this shit do not order nothing
        return res.sort((a, b) => {
            return a.order - b.order
        });
    }

    private getAllCookRecipes() {
        return new Promise((resolve) => {
            this.firebase.database
                .ref('/recipes/cook')
                .once('value')
                .then((snap) => {
                    resolve(snap.val());
                });
        });
    }


    //todo: from here to the end change all and do it like before on that file
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
                        name: recipes[index].name,
                        steps: recipes[index].steps
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
