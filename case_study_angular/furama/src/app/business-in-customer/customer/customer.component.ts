import {Component, OnInit} from '@angular/core';
import {Customer} from './customer';
import {CustomerService} from '../service/customer.service';
import {Subscription} from 'rxjs';
import {TypeCustomer} from '../type-customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {

  id: number;
  name: string;
  customerList: Customer[];
  customerTypeList: TypeCustomer[];
  pageOfItems: Array<any>;
  page = 1;
  private subcription: Subscription;


  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.findAllCustomer();
    this.findAllCustomerType();
    console.log(this.findAllCustomer());
    console.log(this.findAllCustomerType());
  }

  findAllCustomer() {
    this.customerService.findAll().subscribe(data => {
      this.customerList = data;
    }, error => {
      console.log(error);
    });
  }

  findAllCustomerType() {
    this.customerService.findAllTypeCustomer().subscribe(data => {
      console.log(data);
      this.customerTypeList = data;
    }, error => {
      console.log(error);
    });
  }

  delete() {
    this.customerService.delete(this.id);
  }

  valueOf(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
