import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Cake Recipe 1', 'Enjoy the baking 1', 'https://livforcake.com/wp-content/uploads/2017/07/black-forest-cake-4.jpg' ),
    new Recipe('A Cake Recipe', 'Enjoy the baking', 'https://livforcake.com/wp-content/uploads/2017/07/black-forest-cake-4.jpg' )
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(data: Recipe){
    this.selectedRecipe.emit(data);
  }

}
