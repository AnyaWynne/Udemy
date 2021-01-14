import { Component, OnInit } from '@angular/core';
// import { Recipe } from "./recipe.model";
// import { RecipeService } from './recipe.service'; old way of doing things

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {

  // selectedRecipe: Recipe; old way of doing things

 constructor(){}


  ngOnInit(): void {
    // this.recipeService.recipeSelected.subscribe(
    //   (recipe: Recipe) => {
    //     this.selectedRecipe = recipe;
    //   }
    // );

  }
}
