import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../todo-item';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  title = "";
  isEditing = false;
  show = false;

  @Input() todo: TodoItem;

  @Output() edit = new EventEmitter<TodoItem>();

  @Output() remove = new EventEmitter<TodoItem>();

  ngOnInit() {
    this.todo = {...this.todo};
  }

  startEdit() {
    this.isEditing = true;
    
  }

  onTitleChange(value: string) {
    this.todo.title = value;
  }

  endEdit(event: KeyboardEvent) {
    if (event.keyCode !== 13) {
      return;
    }

    if (!this.todo.title) {
      this.show = true;
      return;
    }
    this.edit.emit(this.todo);
    this.isEditing = false;
    this.show = false;
  }

  onRemove() {
    this.remove.emit(this.todo);
  }
  
  drop(event: CdkDragDrop<string[]>) {
    // console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
