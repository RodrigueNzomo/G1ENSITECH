import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradeListComponent } from './grade-list/grade-list.component';
import { GradeFormComponent } from './grade-form/grade-form.component';
import { StudentGradeViewComponent } from './student-grade-view/student-grade-view.component';



@NgModule({
  declarations: [
    GradeListComponent,
    GradeFormComponent,
    StudentGradeViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GradesModule { }
