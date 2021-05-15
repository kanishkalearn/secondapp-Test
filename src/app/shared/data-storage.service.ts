import { Recipe } from './../recipes/recipe.model';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { RecipeService } from '../recipes/recipe.service';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService{
  constructor(private http:HttpClient,private recipeService:RecipeService){

  }

  storeData(){
  //  return this.http.put('https://ng-recipe-book-a5181-default-rtdb.firebaseio.com/recipes.json',
  //  this.recipeService.getRecipes());
  const req= new HttpRequest('PUT','https://ng-recipe-book-a5181-default-rtdb.firebaseio.com/recipes.json',
  this.recipeService.getRecipes(),
    {
      reportProgress:true
    }
  );
  return this.http.request(req);
  }
  fetchData(){
    return this.http.get<[]>('https://ng-recipe-book-a5181-default-rtdb.firebaseio.com/recipes.json')
    .map(
      (response)=>{
        let res:Recipe[]=response;
        for(let r of res){
          if(!r['ingredients']){

            r['ingredients']=[];
          }
        }
        return res;
      }
    )
    .subscribe(
      (response)=>{
        console.log(response);
      }
    );
  }
}
