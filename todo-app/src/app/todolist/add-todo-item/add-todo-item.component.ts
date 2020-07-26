import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.scss']
})
export class AddTodoItemComponent implements OnInit {

  title = '';
  
  public show = false;

  @Output() add = new EventEmitter<TodoItem>();

  ngOnInit() {
  }

  onTitleChange(event: string) {
    this.title = event;
  }

  endEdit(event: KeyboardEvent) {
    if (event.keyCode !== 13) {
      return;
    }
    if (!this.title) {
      this.show = true;
      return;
    }
    this.add.emit({ id: Date.now(), title: this.title});
    this.title = '';
    this.show = false;
  }
}
