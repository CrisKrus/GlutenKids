import {Ingredient} from "./Ingredient";
import {Step} from "./Step";

export type Recipe = {
    name: string
    level: number
    ingredients: Array<Ingredient>
    id: string
    steps: Array<Step>
};
