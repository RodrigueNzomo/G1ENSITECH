import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGradeViewComponent } from './student-grade-view.component';

describe('StudentGradeViewComponent', () => {
  let component: StudentGradeViewComponent;
  let fixture: ComponentFixture<StudentGradeViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentGradeViewComponent]
    });
    fixture = TestBed.createComponent(StudentGradeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
