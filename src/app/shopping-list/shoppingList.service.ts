
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model'

// @Injectable()
export class ShoppingService {
ingredientsChanged = new Subject<Ingredient[]>();
startedEditing = new Subject<number>();
 private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];

getIngredient(index: number){
    return this.ingredients[index];
}
      
 getIngredients(){
     return this.ingredients.slice();
 }     
 addItem(userInputItem: Ingredient):void{
        this.ingredients.push(userInputItem);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
 addIngredients(ingredients: Ingredient[]){
    for (let ingredient of ingredients){
        this.addItem(ingredient);
    }
    // this.ingredients.push(...ingredients);
    // this.ingredientsChanged.next(this.ingredients.slice());
    console.log('testing add ingredients in shopping service' + ingredients[1].name);
 }

 updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this. ingredientsChanged.next(this.ingredients.slice());
 }

 deleteIngredient(index:number){
     this.ingredients.splice(index, 1);
     this.ingredientsChanged.next(this.ingredients.slice());
 }

}