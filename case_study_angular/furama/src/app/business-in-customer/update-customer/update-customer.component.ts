import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer/customer';
import {TypeCustomer} from '../type-customer';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../service/customer.service';
import {CustomerClass} from '../CustomerClass';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  customer: Customer;

  typeCustomerList: TypeCustomer[] = [
    {customerTypeId: 1, customerTypeName: 'Diamond'},
    {customerTypeId: 2, customerTypeName: 'Platinum'},
    {customerTypeId: 3, customerTypeName: 'Gold'},
    {customerTypeId: 4, customerTypeName: 'Silver'},
    {customerTypeId: 5, customerTypeName: 'Member'},
  ];

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

  constructor(private activatedRoute: ActivatedRoute,
              private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.id);
    // this.customer = this.customerService.findById(id);

    // dòng này gây ra lỗi
    this.customerFormUpdate.patchValue(this.customer);
  }

  onSubmit() {
    const customer = this.customerFormUpdate.value;
    this.customerService.update(customer);
    this.customerFormUpdate.reset();
    this.router.navigateByUrl('/list-customer');
  }
}
