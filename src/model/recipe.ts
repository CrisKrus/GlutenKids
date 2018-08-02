import {Ingredient} from "./Ingredient";

export type Recipe = {
    name: string
    level: number
    ingredients: Array<Ingredient>
    id: string
};
