import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from './business-in-customer/customer/customer.component';
import {FacilitiesComponent} from './business-in-facilities/facilities/facilities.component';
import {ContractComponent} from './business-in-contract/contract/contract.component';
import {HomePageComponent} from './home-page/home-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'list-customer', component: CustomerComponent},
  { path: 'list-facilities', component: FacilitiesComponent},
  { path: 'list-contract', component: ContractComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
