import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos: Todo[];

  constructor(){
    this.todos = [
      {
        sno: 1,
        title: "Title 1",
        subtitle: "Subtitle",
        desc: "Description 1",
        active: true
      },
      {
        sno: 2,
        title: "Title 2",
        subtitle: "Subtitle",
        desc: "Description 2",
        active: false
      },
      {
        sno: 3,
        title: "Title 3",
        subtitle: "Subtitle",
        desc: "Description 3",
        active: true
      },
    ]
  }
}
