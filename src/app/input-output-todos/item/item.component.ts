import { Component, EventEmitter, Input, Output, inject ,OnInit} from '@angular/core';
import { SaveTodosService } from 'src/app/service/saveTodos.service';
@Component({
  selector: 'item-conponent',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() todos: any;
  @Output() itemChange = new EventEmitter();
  private _saveTodos =  inject(SaveTodosService)
  selectedItemIndex: number = -1;

  editItem(index: number) {
    this.selectedItemIndex = index;
  }

  saveItem() {
    // console.log(this.todos[this.selectedItemIndex].text);
    localStorage.setItem('todos', JSON.stringify(this.todos));
    // this.itemChange.emit(this.todos[this.selectedItemIndex].text)
    this.selectedItemIndex = -1;
  }

  deleteItem(index: number) { 
    this.selectedItemIndex = index;
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
    // this.itemChange.emit(this.todos[this.selectedItemIndex].text)
  }

  complete(item:any, stt:any){
    item.completed =!item.completed
    this.todos[stt].completed = item.completed
    localStorage.setItem('todos', JSON.stringify(this.todos));  
  }

}
