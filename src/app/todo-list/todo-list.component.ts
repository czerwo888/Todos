import { Component } from '@angular/core';
import { NgClass, NgForOf, NgIf, NgStyle } from '@angular/common';
import { ToDo } from '../shared/interfaces/todo.interface';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgStyle,
    NgClass
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos: ToDo[] = [];
  selectedTodos: Set<ToDo> = new Set<ToDo>();

  ErrorMessage: string = '';

  addTodo(todo: string): void {
    if (todo.length <= 3) {
      this.ErrorMessage = "zadanie musi mieć więcej niż 3 znaki";
      return;
    }

    this.ErrorMessage = '';
    this.todos.push({ name: todo, isComplete: false });
    console.log('Aktualna lista todo: ', this.todos);
  }

  removeSelectedTodos() {
    this.todos = this.todos.filter(todo => !this.selectedTodos.has(todo));
    this.selectedTodos.clear();
  }

  changeTodoStatus(todo: ToDo) {
    todo.isComplete = !todo.isComplete;
  }

  clearErrorMessage() {
    this.ErrorMessage = '';
  }

  toggleTodoSelection(todo: ToDo) {
    if (this.selectedTodos.has(todo)) {
      this.selectedTodos.delete(todo);
    } else {
      this.selectedTodos.add(todo);
    }
  }
}
