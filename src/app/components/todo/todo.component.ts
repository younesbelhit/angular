import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {


  todos: Array<any>;
  todo = { 
    title: null, 
    completed: false 
  }

  constructor(
    private todoService: TodoService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('todos');
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  addTodo() {
    this.todoService.addTodo(this.todo);
  }

  trashTodo(todo) {
    console.log(todo);
  }

}
