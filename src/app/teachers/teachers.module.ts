import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';



@NgModule({
  declarations: [
    TeacherListComponent,
    TeacherFormComponent,
    TeacherDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TeachersModule { }
