import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentComponent } from './student/student.component';


const routes: Routes = [
  {
    path:'registration',component:StudentRegistrationComponent
  },
//   {
// path:"",redirectTo:'AppComponent',pathMatch:'full'
//   },
    {
    path:'student',
     children:
    [
      {
        path:'',component:StudentComponent
      },
{
  path:'studentDetails',component:StudentDetailsComponent
},
{
path:'loginPage',
children:[
  {
    path:'',component:StudentLoginComponent
  },
  {
    path:'registration',component:StudentRegistrationComponent
  }
]

},

    ]
    
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
