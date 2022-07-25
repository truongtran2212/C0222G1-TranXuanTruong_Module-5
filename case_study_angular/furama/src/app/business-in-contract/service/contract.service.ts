import { Injectable } from '@angular/core';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contract} from '../Contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private readonly API_URL = 'http://localhost:8080/contract-rest/list-contract-ajax';

  constructor(private http: HttpClient) { }

  // contractList: Contract[] = [
  //   {
  //     id: 1,
  //     startDay: '2022-07-12',
  //     endDay: '2022-07-18',
  //     moneyDeposit: 2000,
  //     totalMoney: 4000,
  //   },
  //   {
  //     id: 2,
  //     startDay: '2022-07-20',
  //     endDay: '2022-07-22',
  //     moneyDeposit: 3000,
  //     totalMoney: 6000,
  //   },
  //   {
  //     id: 3,
  //     startDay: '2022-07-21',
  //     endDay: '2022-07-22',
  //     moneyDeposit: 1000,
  //     totalMoney: 2000,
  //   },
  //   {
  //     id: 4,
  //     startDay: '2022-07-25',
  //     endDay: '2022-07-27',
  //     moneyDeposit: 7474,
  //     totalMoney: 22222,
  //   },
  // ];
  findAll(): Observable<Contract[]> {
    return this.http.get<Contract[]>(this.API_URL);
  }
  create(contract: Contract): Observable<Contract> {
  return this.http.post<Contract>(this.API_URL, contract);
  }
}
