import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TicketComponent} from "./ticket/ticket.component";


const routes: Routes = [
  {path: '' , component: TicketComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
