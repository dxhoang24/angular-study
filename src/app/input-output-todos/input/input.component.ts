import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { SaveTodosService } from 'src/app/service/saveTodos.service';

@Component({
  selector: 'input-conponent',
  templateUrl: './input.component.html',
})
export class InputComponent {
  title = 'component-comunication2';
  @Input() todos : any;
  @Output() inputChange = new EventEmitter();
  private _saveTodos = inject(SaveTodosService)
  data =""
  array : any =[]
  addData(){    
    this.todos.push({text:this.data,completed:false});
    localStorage.setItem('todos', JSON.stringify(this.todos));
    this.inputChange.emit(this.todos);
    this.data = '';
  }

  findData(str:string){
    this.todos = this._saveTodos.getTodos(str)
    this.inputChange.emit(this.todos);
    console.log("thiss",this.todos);
  }
}
