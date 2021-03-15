
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService{

  

   private recipes:Recipe[]=[
        new Recipe(
            'A Testing',
            'This is i am tesing',
            'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_1280.png',
            [
                new Ingredient('Meat',1),
                new Ingredient('Fries',10)
            ]),
        new Recipe(
            'A Testing',
            'This is i am tesing1',
            'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_1280.png',
        [
            new Ingredient('Meat',1),
            new Ingredient('Fries',10)
        ]
      )];

      getRecipes(){
          return this.recipes.slice();
      }
      getRecipe(index:number){
        return this.recipes[index];
      }
}