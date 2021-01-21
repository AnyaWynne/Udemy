import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shoppingList.service';
import { Recipe } from './recipe.model';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

    recipeChanged = new Subject<Recipe[]>();

    // recipeSelected = new Subject<Recipe>(); now we are routing the links

    ingredientSelected = new Subject<Ingredient>();

    // private recipes: Recipe[] = [
    //     // new Recipe('A Cake Recipe 1', 'Enjoy the baking 1', 'https://livforcake.com/wp-content/uploads/2017/07/black-forest-cake-4.jpg', 
    //     // [new Ingredient('flour', 1), new Ingredient('sugar', 1), new Ingredient('eggs', 1)] ),

    //     // new Recipe('A Cake Recipe', 'Enjoy the baking', 'https://livforcake.com/wp-content/uploads/2017/07/black-forest-cake-4.jpg', 
    //     // [new Ingredient('chocolate', 1), new Ingredient('sugar', 2), new Ingredient('eggs', 3) ] )
    //   ];

      private recipes: Recipe[] = [];

constructor(private shoppingService: ShoppingService){}

getRecipes(){
    return this.recipes.slice();
}

getRecipe(index: number){
    return this.recipes[index];
}

addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingService.addIngredients(ingredients);
    // console.log(ingredients[0].name);
}

addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
}

updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
}

deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
}

setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
}

}