import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ContractService} from '../service/contract.service';
import {Router} from '@angular/router';
import {Contract} from '../Contract';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-modal-create-contract',
  templateUrl: './modal-create-contract.component.html',
  styleUrls: ['./modal-create-contract.component.css']
})
export class ModalCreateContractComponent implements OnInit {

  public createContractForm: FormGroup;

  private subcription: Subscription;

  constructor(private contractService: ContractService,
              private router: Router) {
  }

  // Custom validate day khi add new thì không hiện ra

  ngOnInit(): void {
    this.createContractForm = new FormGroup({
      // id: new FormControl('', Validators.required),
      day: new FormGroup({
        startDay: new FormControl('', Validators.required),
        endDay: new FormControl('', Validators.required),
      }, this.checkDay),

      moneyDeposit: new FormControl('', [Validators.required, Validators.min(1)]),
      totalMoney: new FormControl('', [Validators.required, Validators.min(1)]),
    });
  }


  onSubmit() {
    const contract = this.createContractForm.value;
    this.contractService.create(contract).subscribe(() => {
      this.createContractForm.reset();
      alert('them moi thanh cong')
    }, error => {
      console.log(error);
    })
    // Đặt reset thì khi add thành công sẽ k tắt modal
    // this.createContractForm.reset();
    // this.router.navigateByUrl('/list-contract');
  }

  checkDay(abstractControl: AbstractControl): any {
    const day = abstractControl.value;

    return (day.startDay < day.endDay) ? null : {error: true};
  }

  getStartDay() {
    return this.createContractForm.get('day').get('startDay');
  }

  getEndDay() {
    return this.createContractForm.get('day').get('endDay');
  }
}
