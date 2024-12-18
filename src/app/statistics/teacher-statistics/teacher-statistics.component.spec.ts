import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherStatisticsComponent } from './teacher-statistics.component';

describe('TeacherStatisticsComponent', () => {
  let component: TeacherStatisticsComponent;
  let fixture: ComponentFixture<TeacherStatisticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherStatisticsComponent]
    });
    fixture = TestBed.createComponent(TeacherStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
