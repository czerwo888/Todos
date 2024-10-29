import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {ToDo} from '../shared/interfaces/todo.interface';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos : ToDo[] = [];

  addTodo(todo : string) : void {
    this.todos.push({name: todo, isComplete: true});
    console.log('Aktualna lista todo: ', this.todos);
  }
}
