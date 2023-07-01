import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EVIncentivesComponent } from './ev-incentives.component';

describe('EVIncentivesComponent', () => {
  let component: EVIncentivesComponent;
  let fixture: ComponentFixture<EVIncentivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EVIncentivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EVIncentivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
