import { Component } from '@angular/core';
import { Ingredient, Quantity } from '../../ingredient/ingredient.module';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.pug'
})
export class ShoppingListComponent {

  shoppingList: Ingredient[] = [
    new Ingredient('Pasta', 1, Quantity.KG),
    new Ingredient('Tomatoes', 4, Quantity.UNITY)
  ];
}
