import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {FacilitiesComponent} from './business-in-facilities/facilities/facilities.component';
import {ModalCreateFacilitiesComponent} from './business-in-facilities/modal-create-facilities/modal-create-facilities.component';
import {ModalUpdateFacilitiesComponent} from './business-in-facilities/modal-update-facilities/modal-update-facilities.component';
import {CustomerComponent} from './business-in-customer/customer/customer.component';
import {ModalCreateCustomerComponent} from './business-in-customer/modal-create-customer/modal-create-customer.component';
import {ModalUpdateCustomerComponent} from './business-in-customer/modal-update-customer/modal-update-customer.component';
import {ContractComponent} from './business-in-contract/contract/contract.component';
import {ModalCreateContractComponent} from './business-in-contract/modal-create-contract/modal-create-contract.component';
import {HomePageComponent} from './home-page/home-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PaginationControlsComponent} from './pagination-controls/pagination-controls.component';
import {JwPaginationModule} from 'jw-angular-pagination';
import {JwPaginationComponent} from './jw-pagination/jw-pagination.component';
import {HttpClientModule} from '@angular/common/http';
import { UpdateFacilittiesComponent } from './business-in-facilities/update-facilities/update-facilitties.component';
import { UpdateCustomerComponent } from './business-in-customer/update-customer/update-customer.component';

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
    ModalCreateContractComponent,
    HomePageComponent,
    PaginationControlsComponent,
    JwPaginationComponent,
    UpdateFacilittiesComponent,
    UpdateCustomerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    JwPaginationModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
