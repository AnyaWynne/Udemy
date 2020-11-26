import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Cake Recipe', 'Enjoy the baking', 'https://livforcake.com/wp-content/uploads/2017/07/black-forest-cake-4.jpg' ),
    new Recipe('A Cake Recipe', 'Enjoy the baking', 'https://livforcake.com/wp-content/uploads/2017/07/black-forest-cake-4.jpg' )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
