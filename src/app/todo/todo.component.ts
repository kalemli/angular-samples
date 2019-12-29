import { TodoModel, TodoItem } from './../models/todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  model = new TodoModel();
  isDisplay = false;

  getName() {
    return this.model.user;
  }

  getItems() {
    return this.model.items.filter(item => !item.action || this.isDisplay);
  }

  addItem(value) {
    if (value != '') {
      this.model.items.push(new TodoItem(value, false));
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
