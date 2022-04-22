import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "listStudent" },
  {path:'addStudent', component:AddStudentComponent},
  {path:'listStudent', component:ListUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
