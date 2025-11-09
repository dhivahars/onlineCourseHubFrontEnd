import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashBoard } from './student-dash-board';

describe('StudentDashBoard', () => {
  let component: StudentDashBoard;
  let fixture: ComponentFixture<StudentDashBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDashBoard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDashBoard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
