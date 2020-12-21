import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shoppingList.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {


  @ViewChild('nameUserInput', {static:false}) nameUserInputRef: ElementRef;
  @ViewChild('amountUserInput', {static:false}) amountUserInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingService) { }

  ngOnInit(): void {
  }

  emitUserInput(){
    const newIngredient = new Ingredient (this.nameUserInputRef.nativeElement.value, this.amountUserInputRef.nativeElement.value);
    this.shoppingListService.addItem(newIngredient);
  }

}
