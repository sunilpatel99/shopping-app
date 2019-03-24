import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'Simple veg Recipe',
      'https://showmetheyummy.com/wp-content/uploads/2018/01/Instant-Pot-Vegetarian-Chili-Show-Me-the-Yummy-5@2x.jpg'),
    new Recipe('Morning Breakfast',
      'This is not a recipe',
      'https://mdbootstrap.com/img/Photos/Slides/img%20(58).jpg')
  ];

  constructor() { }

  ngOnInit() {
  }
 
  onRecipeSelected(recipe: Recipe){
      this.recipeWasSelected.emit(recipe);
   }

}
