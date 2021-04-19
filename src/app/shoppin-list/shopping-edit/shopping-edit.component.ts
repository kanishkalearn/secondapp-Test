import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {

  @ViewChild("f") slForm:NgForm;

  subscription :Subscription;
  editMode=false;
  editedItemIndex:number;
  editedItem:Ingredient;

  constructor(private slService:ShoppingListService) { }

  ngOnInit(): void {
    this.subscription=this.slService.startedEditing.subscribe(
      (index:number)=>{
        this.editedItemIndex=index;
        this.editMode=true;
        this.editedItem=this.slService.getIngredient(index);
        this.slForm.name=this.editedItem.name;
        this.slForm.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount
        })
      }
    );
  }

  onAddItem(form:NgForm){
   const formValue=form.value;
    const newIngredient=new Ingredient(formValue.name,formValue.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex,newIngredient);
      this.editMode=false;
    }else{
      this.slService.addIngredient(newIngredient);
    }
    this.slForm.reset();
  }

  onClear(){
    this.slForm.reset();
    this.editMode=false;
  }

  onDelete(){
    if(this.editMode){
      this.slService.deleteIngredient(this.editedItemIndex);
      this.onClear();
    }
  }

ngOnDestroy(){
  this.subscription.unsubscribe();
}
}
