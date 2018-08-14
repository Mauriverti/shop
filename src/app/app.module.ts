import { AngularMaterialModule } from '../modules/angular-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { ContentComponent } from './core/content/content.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { ShoppingEditComponent } from './shopping/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ContentComponent,
    RecipeComponent, RecipeDetailComponent, RecipeItemComponent, RecipeListComponent,
    ShoppingEditComponent, ShoppingListComponent],
  imports: [
    BrowserModule, AngularMaterialModule, FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
