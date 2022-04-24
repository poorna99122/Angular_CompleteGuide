import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

//Recipe Service is the place in our app where we manage our recipes
@Injectable()
export class RecipeService {
  //We are declaring an event here in services instead of sending data from recipe-item to recipe-list to recipes to recipe-details component
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Biryani',
      'Biryani is one of the most popular dishes in South Asia, as well as among the diaspora from the region. ',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Biryani_of_Lahore.jpg/220px-Biryani_of_Lahore.jpg',
      [new Ingredient('Rice', 1), new Ingredient('Meat', 1)]
    ),

    new Recipe(
      'Pizza',
      'Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven.',
      'https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/pizza-recipe-1152x1536.jpg',
      [new Ingredient('Flour', 2), new Ingredient('Meat', 1)]
    ),

    new Recipe(
      'Burger',
      'A hamburger is a food consisting of fillings —usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll. ',
      'https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_1600,c_limit/Smashburger-recipe-120219.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipe() {
    //slice() with no arguments returns new array which is the exact copy of recipes in this service file
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
