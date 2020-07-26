import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todo-item';

@Component({
  selector: 'todo-list',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})


export class TodoListComponent implements OnInit {
  todoList: TodoItem[];

  ngOnInit() {
    this.todoList = [
      { id: 1, title: 'ToDo 1'},
      { id: 2, title: 'ToDo 2'},
      { id: 3, title: 'ToDo 3'},
    ];
  }

  handleEdit(event: TodoItem) {
    this.todoList = this.todoList.map((todo: TodoItem) => {
      if (todo.id === event.id) {
        todo = {...todo, ...event};
      }
      return todo;
    });
  }

  handleRemove(event: TodoItem) {
    this.todoList = this.todoList.filter((todo: TodoItem) => {
      return todo.id !== event.id;
    });
  }

  handleAdd(event: TodoItem) {
    this.todoList = [...this.todoList, event];
    //console.log(event, "this.todoList")
  }
}

