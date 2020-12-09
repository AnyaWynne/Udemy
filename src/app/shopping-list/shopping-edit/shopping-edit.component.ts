import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() emittingShoppingData = new EventEmitter<Ingredient>();

  @ViewChild('nameUserInput', {static:false}) nameUserInputRef: ElementRef;
  @ViewChild('amountUserInput', {static:false}) amountUserInputRef: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  emitUserInput(){

    const newIngredient = new Ingredient (this.nameUserInputRef.nativeElement.value, this.amountUserInputRef.nativeElement.value);
    this.emittingShoppingData.emit(newIngredient);
  }

}
