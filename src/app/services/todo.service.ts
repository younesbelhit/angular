import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { fromArray } from '@amcharts/amcharts4/.internal/core/utils/Iterator';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todo = new BehaviorSubject<any>([
    {
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
   },
    {
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    }
  ]);
  
  

  constructor(
    private _http: HttpClient
  ) { }

  getTodos() {
    return this.todo.asObservable();
  }

  addTodo(newTodo) {
    newTodo.id = Math.floor(Math.random() * 10);
    this.todo.next([...this.todo.value, newTodo]);
  }

  trashTodo(todo) {
    if(confirm('Are you sure ?')) {
      
    }
  }

 

}
