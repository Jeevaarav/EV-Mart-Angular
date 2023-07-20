import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserorderfeedbackComponent } from './userorderfeedback.component';

describe('UserorderfeedbackComponent', () => {
  let component: UserorderfeedbackComponent;
  let fixture: ComponentFixture<UserorderfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserorderfeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserorderfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
