import {Component, OnInit} from '@angular/core';
import {Customer} from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {

  // customer: {} = {};
  customerList: Customer[] = [
    {
      id: 1,
      code: 'KH-1111',
      name: 'Trường',
      gender: 1,
      idCard: '123123',
      phoneNumber: '23412546',
      address: '12 Trần Phú',
      typeCustomer: 1
    },
    {
      id: 2,
      code: 'KH-1111',
      name: 'Khoa',
      gender: 1,
      idCard: '123123',
      phoneNumber: '23412546',
      address: '12 Trần Phú',
      typeCustomer: 2
    },
    {
      id: 3,
      code: 'KH-1111',
      name: 'Tùng',
      gender: 1,
      idCard: '123123',
      phoneNumber: '23412546',
      address: '12 Trần Phú',
      typeCustomer: 3
    },
    {
      id: 4,
      code: 'KH-1111',
      name: 'Thảo',
      gender: 0,
      idCard: '123123',
      phoneNumber: '23412546',
      address: '12 Trần Phú',
      typeCustomer: 4
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
