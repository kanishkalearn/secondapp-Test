import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ShoppinListComponent } from "./shoppin-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";

@NgModule({
    declarations:[
        
    ShoppinListComponent,
    ShoppingEditComponent
    ],
    imports:[
        CommonModule,
        FormsModule
    ]
})
export class ShoppingListModule{
    ngggg(){}
}