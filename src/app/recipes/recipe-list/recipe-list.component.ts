import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
     new Recipe('Fist recipe','This is simple a test','https://www.simplyrecipes.com/thmb/mbN8mXZ0srgAT1YrDU61183t0uM=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1b-ea13798d224048b3a28afb0936c9b645.jpg'),
     new Recipe('Second recipe','This is simple a test','https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&webp=true&resize=300,272'),
     new Recipe('Third recipe','This is simple a test','https://c.ndtvimg.com/2022-03/ggnaqncg_mutton-curry_625x300_14_March_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350')
     
  
    ];

  constructor() { }

  ngOnInit(): void {
  }


  onRecipeSelected(recipe : Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
