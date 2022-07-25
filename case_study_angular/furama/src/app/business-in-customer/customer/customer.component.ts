import {Component, OnInit} from '@angular/core';
import {Customer} from './customer';
import {CustomerService} from '../service/customer.service';
import {TypeCustomer} from '../type-customer';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {

  id: number;
  name: string;
  customerList: Customer[] = [
    {
      customerId: 0,
      customerCode: '',
      customerName: '',
      customerBirthday: '',
      customerGender: 0,
      customerIdCard: '',
      customerPhone: '',
      customerEmail: '',
      customerAddress: '',
      customerType: {
        customerTypeId: 0,
        customerTypeName: '',
      },
      status: 0
    }
  ];
  customer: Customer;
  customerFormUpdate = new FormGroup({
    id: new FormControl(''),
    code: new FormControl('', [Validators.required, Validators.pattern('^KH-[0-9]{4}$')]),
    name: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    idCard: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{9}|[0-9]{12}$')]),
    dayOfBirth: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required,
      Validators.pattern('^090[0-9]{7}|091[0-9]{7}|\\(84\\)\\+90[0-9]{7}|\\(84\\)\\+91[0-9]{7}$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', Validators.required),
    typeCustomer: new FormControl('', Validators.required),
  });

  typeCustomerList: TypeCustomer[] = [
    {customerTypeId: 1, customerTypeName: 'Diamond'},
    {customerTypeId: 2, customerTypeName: 'Platinum'},
    {customerTypeId: 3, customerTypeName: 'Gold'},
    {customerTypeId: 4, customerTypeName: 'Silver'},
    {customerTypeId: 5, customerTypeName: 'Member'},
  ];
  // customerTypeList: TypeCustomer[];

  constructor(private customerService: CustomerService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
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
      this.typeCustomerList = data;
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

  onSubmitUpdate() {
    // console.log(this.customerFormUpdate.value);
    const customerObj = this.customerFormUpdate.value;
    customerObj.id = this.customer.customerId;
    this.customerService.update(customerObj).subscribe();
    this.router.navigateByUrl('/list-customer');
  }


  onSubmitCreate() {

  }

  update() {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.customerService.findById(id).subscribe(value => {
      this.customer = value;
      console.log(this.customer);
      this.customerFormUpdate.patchValue(this.customer);
    }, error => {
      console.log(error);
    }, () => {
      // this.ngOnInit();
    });
  }
}
