import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() recipeClicked = new EventEmitter<boolean>();
  @Output() shoppingClicked = new EventEmitter<boolean>();
  
  collapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  recipeSelected(){
this.recipeClicked.emit(true);
  }

  shoppingSelected(){
this.shoppingClicked.emit(true);
  }

}
