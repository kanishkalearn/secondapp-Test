import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { ShoppingListService } from '../shoppin-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe:Recipe;
  id:number;
  constructor(private recipeService:RecipeService,
              private route:ActivatedRoute,
              private slService:ShoppingListService,
              private router:Router) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=params['id'];
        this.recipe=this.recipeService.getRecipe(this.id);
      }
    );
  }

  toShoppingList(){
    // for (var ingredient of this.recipe.ingredients){
    //   this.slService.addIngredient(ingredient);
    // }
    this.slService.addIngredients(this.recipe.ingredients);
  }
  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);

  }

  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.route});

  }
}
