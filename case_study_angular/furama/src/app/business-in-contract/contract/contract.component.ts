import {Component, OnInit} from '@angular/core';
import {ContractService} from '../service/contract.service';
import {Subscription} from 'rxjs';
import {Contract} from '../Contract';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  public contractList: Contract [] = [];

  private subcription: Subscription;

  constructor(private contractService: ContractService) {
  }

  // findAllContract() {
  //   this.subcription = this.contractService.findAll().subscribe(data => {
  //     this.contractList = data;
  //     console.log(data);
  //   }, error => {
  //     console.log(error);
  //   });
  // }

  ngOnInit(): void {
     this.contractService.findAll().subscribe(data => {
      this.contractList = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
}
