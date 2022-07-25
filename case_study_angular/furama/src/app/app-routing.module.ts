import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from './business-in-customer/customer/customer.component';
import {FacilitiesComponent} from './business-in-facilities/facilities/facilities.component';
import {ContractComponent} from './business-in-contract/contract/contract.component';
import {HomePageComponent} from './home-page/home-page.component';
import {ModalUpdateFacilitiesComponent} from './business-in-facilities/modal-update-facilities/modal-update-facilities.component';
import {ModalUpdateCustomerComponent} from './business-in-customer/modal-update-customer/modal-update-customer.component';
import {UpdateFacilittiesComponent} from './business-in-facilities/update-facilities/update-facilitties.component';
import {UpdateCustomerComponent} from './business-in-customer/update-customer/update-customer.component';


const routes: Routes = [
  { path: '', component: HomePageComponent, data: {title: 'Furama'}},
  { path: 'list-customer', component: CustomerComponent, data : {title: 'Customer List'}},
  { path: 'list-facilities', component: FacilitiesComponent, data : {title: 'Facilities List'}},
  { path: 'update-facilities/:id', component: UpdateFacilittiesComponent, data : {title: 'Update Facilities'}},
  { path: 'update-customer/:id', component: CustomerComponent, data : {title: 'Update Customer'}},
  { path: 'list-contract', component: ContractComponent, data : {title: 'Contract List'}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
