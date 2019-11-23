import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './emp/employee-list/employee-list.component';
import { EmployeeEditComponent } from './emp/employee-edit/employee-edit.component';
import { EmployeeCreateComponent } from './emp/employee-create/employee-create.component';


const routes: Routes = [
  {path:'',component:EmployeeListComponent},
  {path:'emp-list',component:EmployeeListComponent},
  {path:'emp-create',component:EmployeeCreateComponent},
  {path:'emp-edit/:id',component:EmployeeEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
