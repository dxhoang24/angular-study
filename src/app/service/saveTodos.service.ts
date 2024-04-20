import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SaveTodosService {
  constructor() {}
  array : any = []

  getTodos(query: string = '') {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      if (query && query !=="") {
        switch (query) {
          case "1":
            return this.array = JSON.parse(savedTodos);
          case "2":
            const todos: any[] = JSON.parse(savedTodos);
            return this.array = todos.filter((item:any) => {
              if(item.completed == true) return item
            })
          case "3":
            const todo: any[] = JSON.parse(savedTodos);
            return this.array = todo.filter((item:any) => {
              if(item.completed == false) return item
            })
          default:
            break
        }
      }else{
        this.array = JSON.parse(savedTodos);        
      }
    } else {
      this.array = [
        { text: 'Task 1', completed: false },
        { text: 'Task 2', completed: true }
      ];
      localStorage.setItem('todos', JSON.stringify(this.array));
    }    
    return this.array
  }

  createTodo(data:any){
    const savedTodos = localStorage.getItem('todos');
    console.log("savedTodos",savedTodos);
    
    localStorage.setItem('todos', JSON.stringify(data));
    return this.array
  }

  updateTodo(data:any){
    localStorage.setItem('todos', JSON.stringify(data));
  }

  deleteTodo(data:any){

  }
}