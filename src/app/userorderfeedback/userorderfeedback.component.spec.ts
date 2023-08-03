import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserorderfeedbackComponent } from './userorderfeedback.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

describe('UserorderfeedbackComponent', () => {
  let component: UserorderfeedbackComponent;
  let fixture: ComponentFixture<UserorderfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterModule.forRoot([

      ]),ReactiveFormsModule],
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
