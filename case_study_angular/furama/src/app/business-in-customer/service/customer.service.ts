import {Injectable} from '@angular/core';
import {Customer} from '../customer/customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TypeCustomer} from '../type-customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private readonly API_URL = 'http://localhost:8080/list-customer-ajax';

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_URL);
  }

  findAllTypeCustomer(): Observable<TypeCustomer[]> {
    return this.http.get<TypeCustomer[]>('http://localhost:8080/list-typeCustomer-ajax');
  }

  delete(id: number) {
    // for (let i = 0; i < this.customerList.length; i++) {
    //   if (this.customerList[i].id === id) {
    //     this.customerList.splice(i, 1);
    //   }
    // }
  }

  findById(id: number): Observable<Customer> {
      return this.http.get<Customer>(this.API_URL + '/' + id);
  }

  update(customer: Customer): Observable<void> {
    return this.http.patch<void>(this.API_URL + '/' + customer.customerId, customer);
  }

  create(customer: Customer): Observable<void> {
    console.log(customer);
    return this.http.post<void>('http://localhost:8080/create-customer', customer);
  }
}
