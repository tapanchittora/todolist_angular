import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todolist/todolist.component';
import { TodoItemComponent } from './todolist/todo-item/todo-item.component';
import { AddTodoItemComponent } from './todolist/add-todo-item/add-todo-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  // IgxCheckboxModule,
  IgxButtonModule,
  IgxIconModule,
  IgxNavbarModule,
  IgxComboModule,
  IgxDialogModule,
  IgxDropDownModule,
	IgxDragDropModule
} from 'igniteui-angular'

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    AddTodoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // IgxCheckboxModule,
    IgxDragDropModule,
    IgxButtonModule,
    IgxIconModule,
    IgxNavbarModule,
    IgxComboModule,
    IgxDialogModule,
    IgxDropDownModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
}
