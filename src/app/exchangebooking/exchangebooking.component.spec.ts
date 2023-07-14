import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangebookingComponent } from './exchangebooking.component';

describe('ExchangebookingComponent', () => {
  let component: ExchangebookingComponent;
  let fixture: ComponentFixture<ExchangebookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangebookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangebookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
