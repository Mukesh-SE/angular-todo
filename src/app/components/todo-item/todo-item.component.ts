import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo; // 'todo' is defined as an input property

  constructor(){
    this.todo  = {
      sno: 1,
      title: "title",
      subtitle: "subtitle",
      desc: 'description',
      active: true
    }
  }
}
