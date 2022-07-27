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
    customerId: new FormControl(),
    customerCode: new FormControl('', [Validators.required, Validators.pattern('^KH-[0-9]{4}$')]),
    customerName: new FormControl('', Validators.required),
    customerBirthday: new FormControl('', Validators.required),
    customerIdCard: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{9}|[0-9]{12}$')]),
    customerGender: new FormControl('', Validators.required),
    customerPhone: new FormControl('', [Validators.required,
      Validators.pattern('^090[0-9]{7}|091[0-9]{7}|\\(84\\)\\+90[0-9]{7}|\\(84\\)\\+91[0-9]{7}$')]),
    customerEmail: new FormControl('', [Validators.required, Validators.email]),
    customerAddress: new FormControl('', Validators.required),
    customerType: new FormControl('', Validators.required),
    status: new FormControl(0),
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
    this.customerService.findAll().subscribe(data => {
      this.customerList = data;
      console.log(data);
    }, error => {
      console.log(error);
    }, () => {
      console.log('complete');
    });

    this.customerService.findAllTypeCustomer().subscribe(data => {
      this.typeCustomerList = data;
      console.log(data);
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
    const customerObj = this.customerFormUpdate.value;
    this.customerService.create(customerObj).subscribe(() => {
      this.customerFormUpdate.reset();
      // this.router.navigateByUrl('/list-customer');
      console.log(customerObj);
      alert('Them moi thanh cong');
    }, error => {
      console.log('error');
    });
  }

  update() {
    const id = Number(this.activatedRoute.snapshot.params.id);
    console.log(id);
    this.customerService.findById(id).subscribe(value => {
      this.customer = value;
      console.log(this.customer);
      console.log(this.customerService.findById(id));
      this.customerFormUpdate.patchValue(this.customer);
    }, error => {
      console.log(error);
    }, () => {
      this.ngOnInit();
    });
  }
}
