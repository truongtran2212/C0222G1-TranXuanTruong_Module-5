import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavBarComponent} from "./nav-bar/nav-bar.component";



const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
