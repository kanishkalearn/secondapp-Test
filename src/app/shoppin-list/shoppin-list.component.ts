import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shoppin-list',
  templateUrl: './shoppin-list.component.html',
  styleUrls: ['./shoppin-list.component.scss']
})
export class ShoppinListComponent implements OnInit,OnDestroy {
  private subscription:Subscription;
  ingredients:Ingredient[];

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.shoppingListService.getIngredients();
    this.subscription= this.shoppingListService.ingredientsChanged.subscribe(
      (ingredient:Ingredient[])=>{
        this.ingredients=ingredient;
      }
    );
  }
  onIngredientAdded(newIngredient:Ingredient){
    this.ingredients.push(newIngredient);
    
  }

  onEditItem(i:number){
    this.shoppingListService.startedEditing.next(i);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
