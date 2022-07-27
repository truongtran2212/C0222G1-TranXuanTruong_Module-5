import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditStudentComponent} from "./edit-student/edit-student.component";
import {StudentComponent} from "./student/student.component";


const routes: Routes = [
  {path: 'edit-customer/:id' , component: EditStudentComponent},
  {path: '' , component: StudentComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
