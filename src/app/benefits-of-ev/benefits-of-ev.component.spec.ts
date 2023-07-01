import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsOfEVComponent } from './benefits-of-ev.component';

describe('BenefitsOfEVComponent', () => {
  let component: BenefitsOfEVComponent;
  let fixture: ComponentFixture<BenefitsOfEVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsOfEVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenefitsOfEVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
