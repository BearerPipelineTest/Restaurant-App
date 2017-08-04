import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FoodListComponent } from './components/foods/list.component';
import { AddFoodComponent } from './components/foods/add.component';
import { routes } from "app/app.router";
import { AddCategoryComponent } from "app/components/categories/add.component";
import { CategoryService } from "app/services/category.service";
import { FoodService } from "app/services/food.service";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FoodListComponent,
    AddFoodComponent,
    AddCategoryComponent
  ],
  imports: [
    routes,
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [FoodService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
