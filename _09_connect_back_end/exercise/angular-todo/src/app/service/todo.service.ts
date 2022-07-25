import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  API = 'http://localhost:3000/todoList';

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.API);
  }

  create(todo: Todo): Observable<void> {
    return this.http.post<void>(this.API, todo);
  }

  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(this.API + '/' + id);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.patch<Todo>(this.API + '/' + todo.id, todo);
  }

  findById(id: number): Observable<Todo> {
    return this.http.get<Todo>(this.API + '/' + id);
  }
}
