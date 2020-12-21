import { EventEmitter } from '@angular/core';
// import { RecipeService } from '../recipe-book/recipe.service';
import { Ingredient } from '../shared/ingredient.model'

// @Injectable()
export class ShoppingService {
ingredientsChanged = new EventEmitter<Ingredient[]>();
 private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];

    // constructor(private recipeService: RecipeService){}

      
 getIngredients(){
     return this.ingredients.slice();
 }     
 addItem(userInputItem: Ingredient):void{
        this.ingredients.push(userInputItem);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
 addIngredients(ingredients: Ingredient[]){
    for (let ingredient of ingredients){
        this.addItem(ingredient);
    }
    // this.ingredients.push(...ingredients);
    // this.ingredientsChanged.emit(this.ingredients.slice());
    console.log('testing add ingredients in shopping service' + ingredients[1].name);
 }

}