import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-modal-create-contract',
  templateUrl: './modal-create-contract.component.html',
  styleUrls: ['./modal-create-contract.component.css']
})
export class ModalCreateContractComponent implements OnInit {

  public createContractForm: FormGroup;


  constructor() {
  }

  ngOnInit(): void {
    this.createContractForm = new FormGroup({
      // id: new FormControl('',),
      day: new FormGroup({
        startDay: new FormControl('', Validators.required),
        endDay: new FormControl('', Validators.required),
      }, this.checkDay),

      moneyDeposit: new FormControl('', [Validators.required, Validators.min(1)]),
      totalMoney: new FormControl('', [Validators.required, Validators.min(1)]),
    })
  }


  onSubmit() {
    console.log(this.createContractForm.value);
  }

  checkDay(abstractControl: AbstractControl): any{
      const day = abstractControl.value;

      return (day.startDay < day.endDay) ? null : {error: true};
  }

  getStartDay(){
    return this.createContractForm.get('day').get('startDay')
  }

  getEndDay(){
    return this.createContractForm.get('day').get('endDay')
  }

}
