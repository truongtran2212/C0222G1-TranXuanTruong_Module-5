import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../student";
import {Class} from "../class";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  API = 'http://localhost:3000/studentList'
  API_CLASS = 'http://localhost:3000/classList'


  findAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.API);
  }

  create(student: Student): Observable<void> {
    return this.http.post<void>(this.API , student)
  }

  findById(id: number): Observable<Student> {
    return this.http.get<Student>(this.API + '/' + id);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(this.API + '/' + id);
  }

  update(student: Student): Observable<void> {
    return this.http.patch<void>(this.API + '/' + student.id, student)
  }

  findAllClass(): Observable<Class[]> {
    return this.http.get<Class[]>(this.API_CLASS);
  }

  search(name: string, idClass: string): Observable<Student[]> {
    return this.http.get<Student[]>(this.API + '?name_like=' + name + '&' + 'class.id_like=' + idClass)
  }
}
