import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TypeCustomer} from '../type-customer';
import {CustomerService} from '../service/customer.service';

@Component({
  selector: 'app-modal-create-customer',
  templateUrl: './modal-create-customer.component.html',
  styleUrls: ['./modal-create-customer.component.css']
})
export class ModalCreateCustomerComponent implements OnInit {

  constructor(private customerService: CustomerService) {
  }

  public customerFormCreate: FormGroup;

  typeCustomerList: TypeCustomer[] = [
    {customerTypeId: 1, customerTypeName: 'Diamond'},
    {customerTypeId: 2, customerTypeName: 'Platinum'},
    {customerTypeId: 3, customerTypeName: 'Gold'},
    {customerTypeId: 4, customerTypeName: 'Silver'},
    {customerTypeId: 5, customerTypeName: 'Member'},
  ];

  ngOnInit(): void {
    this.customerFormCreate = new FormGroup({
      // id: new FormControl('',[Validators.required]),
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
  }


  onSubmit() {
    console.log(this.customerFormCreate.value);

    const customer = this.customerFormCreate.value;
    // this.customerService.create(customer);
  }
}
