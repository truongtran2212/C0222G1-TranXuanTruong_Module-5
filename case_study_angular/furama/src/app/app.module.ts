import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FacilitiesComponent } from './business-in-facilities/facilities/facilities.component';
import { ModalCreateFacilitiesComponent } from './business-in-facilities/modal-create-facilities/modal-create-facilities.component';
import { ModalUpdateFacilitiesComponent } from './business-in-facilities/modal-update-facilities/modal-update-facilities.component';
import {CustomerComponent} from './business-in-customer/customer/customer.component';
import { ModalCreateCustomerComponent } from './business-in-customer/modal-create-customer/modal-create-customer.component';
import { ModalUpdateCustomerComponent } from './business-in-customer/modal-update-customer/modal-update-customer.component';
import { ContractComponent } from './business-in-contract/contract/contract.component';
import { ModalCreateContractComponent } from './business-in-contract/modal-create-contract/modal-create-contract.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    FacilitiesComponent,
    CustomerComponent,
    ModalCreateFacilitiesComponent,
    ModalUpdateFacilitiesComponent,
    ModalCreateCustomerComponent,
    ModalUpdateCustomerComponent,
    ContractComponent,
    ModalCreateContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
