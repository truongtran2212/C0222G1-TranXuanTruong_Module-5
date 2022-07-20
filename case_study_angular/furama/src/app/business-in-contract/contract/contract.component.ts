import {Component, OnInit} from '@angular/core';
import {Contract} from './contract';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  contractList: Contract[] = [
    {
      id: 1,
      startDay: '2022-07-12',
      endDay: '2022-07-18',
      moneyDeposit: 2000,
      totalMoney: 4000,
    },
    {
      id: 2,
      startDay: '2022-07-20',
      endDay: '2022-07-22',
      moneyDeposit: 3000,
      totalMoney: 6000,
    },
    {
      id: 3,
      startDay: '2022-07-21',
      endDay: '2022-07-22',
      moneyDeposit: 1000,
      totalMoney: 2000,
    },
    {
      id: 4,
      startDay: '2022-07-25',
      endDay: '2022-07-27',
      moneyDeposit: 7474,
      totalMoney: 22222,
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
