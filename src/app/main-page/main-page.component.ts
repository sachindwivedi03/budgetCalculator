import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item-model';
import { BudgetItemListComponent, UpdateEvent } from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

addItem(newItem: BudgetItem){
  this.budgetItems.push(newItem);
  this.totalBudget += newItem.amount;
}

deleteItem(item: BudgetItem){
  let index = this.budgetItems.indexOf(item);
  this.budgetItems.splice(index, 1);
}

updateItem(updateEvent: UpdateEvent){
        //result is the update budget item
        //replace the item with updated or new item
        this.budgetItems[this.budgetItems.indexOf(updateEvent.old)]= updateEvent.new;

        // update total budget
        this.totalBudget -= updateEvent.old.amount;
        this.totalBudget += updateEvent.new.amount;
}

}
