import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TypeCustomer} from "../type-customer";

@Component({
  selector: 'app-modal-create-customer',
  templateUrl: './modal-create-customer.component.html',
  styleUrls: ['./modal-create-customer.component.css']
})
export class ModalCreateCustomerComponent implements OnInit {

  public customerFormCreate : FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.customerFormCreate = new FormGroup({
      // id: new FormControl('',[Validators.required]),
      code: new FormControl('',[Validators.required, Validators.pattern('^KH-[0-9]{4}$')]),
      name: new FormControl('',Validators.required),
      gender: new FormControl('',Validators.required),
      idCard: new FormControl('',[Validators.required, Validators.pattern('^[0-9]{9}|[0-9]{12}$')]),
      dayOfBirth: new FormControl('',Validators.required),
      phone: new FormControl('',[Validators.required,
        Validators.pattern('^090[0-9]{7}|091[0-9]{7}|\\(84\\)\\+90[0-9]{7}|\\(84\\)\\+91[0-9]{7}$')]),
      email: new FormControl('',[Validators.required, Validators.email]),
      address: new FormControl('',Validators.required),
      typeCustomer: new FormControl('',Validators.required),
    })
  }

  public typeCustomerList: TypeCustomer[] = [
    {name: 'Diamond'},
    {name: 'Platinum'},
    {name: 'Gold'},
    {name: 'Silver'},
    {name: 'Member'},
]


  onSubmit() {
    console.log(this.customerFormCreate.value)
  }
}
