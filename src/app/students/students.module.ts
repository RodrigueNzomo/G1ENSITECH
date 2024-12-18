import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentDetailsComponent } from './student-details/student-details.component';



@NgModule({
  declarations: [
    StudentListComponent,
    StudentFormComponent,
    StudentDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StudentsModule { }
