import { Component, inject } from '@angular/core';
import { SaveTodosService } from 'src/app/service/saveTodos.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'component-comunication2';
  private _saveTodos =  inject(SaveTodosService)
  todos = this._saveTodos.getTodos()
  data : any
}
