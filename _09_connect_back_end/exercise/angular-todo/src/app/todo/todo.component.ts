import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl} from '@angular/forms';
import {TodoService} from '../service/todo.service';

let id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoService: TodoService) {
  }

  todos: Todo[] = [];
  content = new FormControl();

  ngOnInit(): void {
    this.findAll();
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  findAll() {
    this.todoService.findAll().subscribe(value => {
      this.todos = value;
    }, error => {
      console.log(error);
    });
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        id: id++,
        content: value,
        complete: false
      };
      this.todoService.create(todo).subscribe(value1 => {
      }, error => {
        console.log(error);
      }, () => this.ngOnInit());
      this.content.reset();
    }
  }

  delete(idDelete) {
    this.todoService.deleteTodo(idDelete).subscribe(value => {
    }, error => {
      console.log(error);
    }, () => {
      this.ngOnInit();
    });
  }

  update(todo: Todo) {
    this.todoService.updateTodo(todo).subscribe(value => {
    }, error => {
      console.log(error);
    }, () => {
      this.ngOnInit();
    });
  }
}
