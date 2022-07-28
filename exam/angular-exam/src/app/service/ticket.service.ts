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

  API = 'http://localhost:3000/ticketList'
  API_HOME = 'http://localhost:3000/homeList'


  findAllTicket(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.API);
  }

  create(ticket: Ticket): Observable<void> {
    return this.http.post<void>(this.API , ticket)
  }
  //
  findById(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(this.API + '/' + id);
  }
  //
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
  //
  search(start: string,end: string): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.API + '?start_like=' + start + '&' + 'end_like=' + end)
  }


}