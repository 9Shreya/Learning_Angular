import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentComponent } from './department/department.component';



const routes: Routes = [
  
  // {
  //   path: '' , redirectTo: '/student' ,pathMatch: 'full'  //it take value in string
  // },
  
  {
    path: 'student' ,component: StudentComponent
  }
  ,
  {
    path: 'stu/:id' ,component: DepartmentComponent
  },
  {
    path: 'sd' ,component: StudentDetailsComponent
  },
  
  {
    path: '**' ,component: PageNotFoundComponent
  }
  
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
