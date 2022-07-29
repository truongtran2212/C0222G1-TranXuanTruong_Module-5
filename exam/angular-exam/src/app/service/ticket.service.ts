import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ticket} from "./ticket";
import {Home} from "./home";


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  API = 'http://localhost:8080/ticketList'
  API_HOME = 'http://localhost:8080/homeList'


  findAllTicket(index: number): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.API + '?index=' + index);
  }

  create(ticket: Ticket): Observable<void> {
    return this.http.post<void>(this.API + '/create' , ticket)
  }
  //
  findById(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(this.API + '/' + id);
  }

  // delete(id: number): Observable<any> {
  //   return this.http.delete<any>(this.API + '/' + id);
  // }
  //
  update(ticket: Ticket): Observable<void> {
    return this.http.patch<void>(this.API + '/' + ticket.id, ticket)
  }
  //
  findAllHome(): Observable<Home[]> {
    return this.http.get<Home[]>(this.API_HOME);
  }

  search(start: string, end: string): Observable<Ticket[]> {

    if(end === '') {
      end = '%20';
    } if(start === '') {
      start = '%20'
    }
    return this.http.get<Ticket[]>(this.API + '/search/'+ 'start=' + start + '/' + end)

  }
}
