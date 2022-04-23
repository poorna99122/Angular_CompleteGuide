import { Recipe } from "./recipe.model";

export class RecipeService {
//Recipe Service is the place in our app where we manage our recipes

private recipes: Recipe[] = [
    new Recipe('Biryani','Biryani is one of the most popular dishes in South Asia, as well as among the diaspora from the region. ','https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Biryani_of_Lahore.jpg/220px-Biryani_of_Lahore.jpg'),
    new Recipe('Pizza','Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven.','https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/pizza-recipe-1152x1536.jpg'),
    new Recipe('Burger','A hamburger is a food consisting of fillings —usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll. ','https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_1600,c_limit/Smashburger-recipe-120219.jpg')

   ];

   getRecipe() {
       //slice() with no arguments returns new array which is the exact copy of recipes in this service file
       return this.recipes.slice();
   }
}