import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseAssignmentComponent } from './course-assignment/course-assignment.component';



@NgModule({
  declarations: [
    CourseListComponent,
    CourseFormComponent,
    CourseAssignmentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoursesModule { }
