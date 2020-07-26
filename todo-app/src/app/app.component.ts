import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MainTodoItem } from './todolist/todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = '';
  listItem: MainTodoItem[];

 // @Output() addNew = new EventEmitter<MainTodoItem>();
  
  ngOnInit() {
    this.listItem = [
      { id: 1, title: 'ToDo List'},
      { id: 2, title: 'In Progress'},
      { id: 3, title: 'Done'}
    ];
  }

//   onTitleChangeName(event: string) {
//     this.title = event;
//  }

//   newList = (event: KeyboardEvent) => {
//     this.addNew.emit({ id: Date.now(), title: this.title});
//     this.title = ''
//     return;
//   }
  handleAddEvent = (event:MainTodoItem) =>{
    this.listItem = [...this.listItem, event];
  }
}
