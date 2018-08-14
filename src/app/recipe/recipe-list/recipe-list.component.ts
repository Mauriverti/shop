import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.pug',
  styleUrls: ['recipe-list.component.css']
})
export class RecipeListComponent {

  recipes: Recipe[] = [
    new Recipe('First Recipe', 'Just a Recipe', 'http://kathysvegankitchen.com/wp-content/uploads/2017/03/33458820656_bb5ab18c77_o.jpg'),
    new Recipe('Second Recipe', 'Another Recipe', 'https://receitatodahora.com.br/wp-content/uploads/2017/09/sobremesa-de-beijinho-com-morango.jpg')
  ];
}
