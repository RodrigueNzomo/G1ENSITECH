import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsOverviewComponent } from './statistics-overview/statistics-overview.component';
import { StudentStatisticsComponent } from './student-statistics/student-statistics.component';
import { TeacherStatisticsComponent } from './teacher-statistics/teacher-statistics.component';



@NgModule({
  declarations: [
    StatisticsOverviewComponent,
    StudentStatisticsComponent,
    TeacherStatisticsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StatisticsModule { }
