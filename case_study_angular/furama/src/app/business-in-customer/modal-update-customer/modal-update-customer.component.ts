import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TypeCustomer} from '../type-customer';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../service/customer.service';
import {Customer} from '../customer/customer';
import {CustomerClass} from '../CustomerClass';

@Component({
  selector: 'app-modal-update-customer',
  templateUrl: './modal-update-customer.component.html',
  styleUrls: ['./modal-update-customer.component.css']
})
export class ModalUpdateCustomerComponent implements OnInit {

  customer: Customer;
  customerList: Customer[] = [];

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
    this.customerService.findAll().subscribe(value => {
      this.customerList = value;
    }, error => {
      console.log(error);
    });
    const id = Number(this.activatedRoute.snapshot.params.id);
    console.log(id);
    this.customerService.findById(id).subscribe(value => {
      this.customerFormUpdate.patchValue(value);
      console.log(value);
    }, error => {
      console.log('hello');
    });

    // dòng này gây ra lỗi
    // this.customerFormUpdate.patchValue(this.customer);
  }


  onSubmit() {
    // console.log(this.customerFormUpdate.value);
    const customerObj = this.customerFormUpdate.value;
    customerObj.id = this.customer.customerId;
    this.customerService.update(customerObj);
    this.router.navigateByUrl('/list-customer');
  }
}
