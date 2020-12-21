import { Component, OnInit } from '@angular/core';
// import { RecipeService } from '../recipe-book/recipe.service';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (updatedIngredients: Ingredient[]) => {
        this.ingredients = updatedIngredients;
      }
    );



  }
  

}
